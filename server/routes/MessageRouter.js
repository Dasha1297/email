import { Router } from "express";
import MessageController from "../controllers/MessageController.js";

const messageRouter = Router();
messageRouter.post("/add", MessageController.addMessage);
messageRouter.get("/folder=:folder", MessageController.getMessages);

export default messageRouter;
