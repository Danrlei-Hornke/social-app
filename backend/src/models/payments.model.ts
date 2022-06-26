import Sequelize, { Model } from "sequelize";
import { database } from "../../orm/sequelize";
import { IPayment } from "../interfaces/payments.interfaces";

export interface IPaymentModel extends Model<IPayment>, IPayment {}
export const payments = database.define<IPaymentModel>("payments", {
   id: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
   object: { type: Sequelize.STRING, allowNull: false },
   invoiceId: { type: Sequelize.BIGINT.UNSIGNED, allowNull: false },
   clientSecret: { type: Sequelize.STRING, allowNull: false },
   cancellationReason: { type: Sequelize.STRING, allowNull: true },
   amount: { type: Sequelize.INTEGER.UNSIGNED, allowNull: false },
   status: { type: Sequelize.STRING, allowNull: false },
   createdAt: Sequelize.DATE,
   updatedAt: Sequelize.DATE,
   canceledAt: { type: Sequelize.INTEGER.UNSIGNED, allowNull: true },
});
