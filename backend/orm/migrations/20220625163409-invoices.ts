import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
   async up(queryInterface: QueryInterface) {
      await queryInterface.createTable("invoices", {
         id: { type: DataTypes.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
         userId: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
         externId: { type: DataTypes.STRING, allowNull: false },
         amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
         currency: { type: DataTypes.STRING, allowNull: false },
         status: { type: DataTypes.STRING, allowNull: false },
         description: { type: DataTypes.STRING, allowNull: false },
         createdAt: DataTypes.DATE,
         updatedAt: DataTypes.DATE,
         expireAt: DataTypes.DATE,
      });
   },

   async down(queryInterface: QueryInterface) {
      await queryInterface.dropTable("invoices");
   },
};
