
import Sequelize, { Model } from "sequelize";
import { database } from "../../orm/sequelize";
import { IInvoice } from "../interfaces/invoices.interfaces";

export interface IInvoiceModel extends Model<IInvoice>, IInvoice {}
export const invoices = database.define<IInvoiceModel>("invoices", {
   id: { type: Sequelize.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
   userId: { type: Sequelize.BIGINT.UNSIGNED, allowNull: false },
   amount: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
   currency: { type: Sequelize.STRING, allowNull: false },
   status: { type: Sequelize.STRING, allowNull: false },
   description: { type: Sequelize.STRING, allowNull: false },
   createdAt: Sequelize.DATE,
   updatedAt: Sequelize.DATE,
   expireAt: Sequelize.DATE,
});