import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
   async up(queryInterface: QueryInterface) {
      await queryInterface.createTable("payments", {
         id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
         object: { type: DataTypes.STRING, allowNull: false },
         invoiceId: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
         clientSecret: { type: DataTypes.STRING, allowNull: false },
         cancellationReason: { type: DataTypes.STRING, allowNull: true },
         amount: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
         canceledAt: { type: DataTypes.INTEGER.UNSIGNED, allowNull: true },
         status: { type: DataTypes.STRING, allowNull: false },
         createdAt: DataTypes.DATE,
         updatedAt: DataTypes.DATE,
      });
   },

   async down(queryInterface: QueryInterface) {
      await queryInterface.dropTable("payments");
   },
};
