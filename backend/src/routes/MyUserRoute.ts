import express from "express";
import MyUserController from "../controllers/MyUserController";
const router = express.Router();
import { jwtParse, jwtCheck } from "../middleware/auth";

router.post(
  "/",
  jwtCheck,
  MyUserController.createCurrentUser as express.RequestHandler
);
router.put(
  "/",
  jwtCheck,
  jwtParse as express.RequestHandler,
  MyUserController.updateCurrentUser as express.RequestHandler
);

export default router;
