import express from "express";
import routes from "../routes";
import { insertLoginHist } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.userHistory, insertLoginHist);

export default userRouter;
