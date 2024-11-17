import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import exp from "constants";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
    console.log("Connected to the database!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}

connectToDatabase();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

app.listen(3000, () => {
  console.log("server started on http://localhost:3000");
});
