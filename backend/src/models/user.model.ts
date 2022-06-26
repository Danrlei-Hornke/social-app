import Sequelize, { Model, Optional } from "sequelize";
import { database } from "../../orm/sequelize";
import { IUser } from "../interfaces/user.interfaces";

interface CreationAttributes extends Optional<IUser, "id"> {}
export interface IUserModel extends Model<IUser, CreationAttributes>, IUser {}
export const users = database.define<IUserModel>("users", {
   id: { type: Sequelize.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
   igId: { type: Sequelize.BIGINT.UNSIGNED, allowNull: true, unique: true },
   igToken: { type: Sequelize.STRING, allowNull: true },
   firstName: { type: Sequelize.STRING, allowNull: false },
   lastName: { type: Sequelize.STRING, allowNull: true },
   email: { type: Sequelize.STRING, unique: true, allowNull: true },
   password: { type: Sequelize.STRING, allowNull: true },
   createdAt: Sequelize.DATE,
   updatedAt: Sequelize.DATE,
});
