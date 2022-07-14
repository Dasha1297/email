import { Router } from "express";
import folderRouter from "./FolderRouter.js";
import messageRouter from "./MessageRouter.js";

const router = Router();

router.use("/folder", folderRouter);
router.use("/message", messageRouter);

export default router;
