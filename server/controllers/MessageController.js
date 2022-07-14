import { Messages } from "../models/models.js";
import { getPagination, getPagingData } from "../services/paginationService.js";

class MessageController {
  async addMessage(req, res) {
    const newMessage = await Messages.create(req.body);
    return res.json(newMessage);
  }

  async getMessages(req, res) {
    const { page } = req.query;
    const { folder } = req.params;
    const { offset, limit } = getPagination(page, 10);
    const rows = await Messages.findAll({ where: { folderId: folder } });
    Messages.findAndCountAll({
      where: { folderId: folder },
      limit,
      offset,
    })
      .then((data) => {
        console.log(data);
        const response = getPagingData(data, rows, page, limit);
        res.json(response);
      })
      .catch((error) => {
        res.status(500);
      });
  }
}

export default new MessageController();
