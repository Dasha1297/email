import { Router } from "express";
import FolderController from "../controllers/FolderController.js";

const folderRouter = Router();
folderRouter.get("/", FolderController.getFolders);
folderRouter.post("/add", FolderController.addFolder);
folderRouter.put("/update/:id", FolderController.updateFolder);
folderRouter.delete("/delete/:id", FolderController.deleteFolder);

export default folderRouter;
