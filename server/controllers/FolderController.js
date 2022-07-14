import { Folders } from "../models/models.js";

class FolderController {
  async getFolders(req, res) {
    return res.json(await Folders.findAll());
  }

  async addFolder(req, res) {
    const newFolder = await Folders.create(req.body);
    return res.json(newFolder);
  }

  async updateFolder(req, res) {
    const { id } = req.body;
    const updatedFolder = await Folders.findOne({ where: { id } });
    if (!updatedFolder) {
      return res.json({ result: false });
    } else {
      updatedFolder.update(req.body);
      return res.json(updatedFolder);
    }
  }

  async deleteFolder(req, res) {
    const { id } = req.body;
    const removedFolder = await Folders.findOne({ where: { id } });
    if (!removedFolder) {
      return res.json({ result: false });
    } else {
      await Folders.destroy({ where: { id } });
      return res.json({ result: true });
    }
  }
}

export default new FolderController();
