import { Router } from "express";
import FolderController from "../controllers/FolderController.js";

const folderRouter = Router();
folderRouter.get("/", FolderController.getFolders);
folderRouter.post("/add", FolderController.addFolder);
folderRouter.post("/update/:id", FolderController.updateFolder);
folderRouter.post("/delete/:id", FolderController.deleteFolder);

export default folderRouter;
