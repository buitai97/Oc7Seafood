import express from "express";
import MyUserController from "../controllers/MyUserController";
const router = express.Router();
import { jwtParse, jwtCheck } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
import { parse } from "path";

router.post(
  "/",
  jwtCheck,
  MyUserController.createCurrentUser as express.RequestHandler
);
router.put(
  "/",
  jwtCheck,
  jwtParse as unknown as express.RequestHandler,
  validateMyUserRequest as unknown as express.RequestHandler,
  MyUserController.updateCurrentUser as express.RequestHandler
);
router.get(
  "/",
  jwtCheck,
  jwtParse as unknown as express.RequestHandler,
  MyUserController.getCurrentUser as express.RequestHandler
);

export default router;
