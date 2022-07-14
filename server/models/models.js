import sequelize from "../db.js";
import { DataTypes } from "sequelize";

export const Folders = sequelize.define("folders", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

export const Messages = sequelize.define("messages", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  author: { type: DataTypes.STRING },
  message: { type: DataTypes.STRING },
});

Folders.hasMany(Messages);
Messages.belongsTo(Folders);
