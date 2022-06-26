import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
   async up(queryInterface: QueryInterface) {
      await queryInterface.createTable("users", {
         id: { type: DataTypes.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
         igId: { type: DataTypes.BIGINT.UNSIGNED, allowNull: true, unique: true },
         igToken: { type: DataTypes.STRING, allowNull: true },
         firstName: { type: DataTypes.STRING, allowNull: false },
         lastName: { type: DataTypes.STRING, allowNull: true },
         email: { type: DataTypes.STRING, unique: true, allowNull: true },
         password: { type: DataTypes.STRING, allowNull: true },
         createdAt: DataTypes.DATE,
         updatedAt: DataTypes.DATE,
      });
   },

   async down(queryInterface: QueryInterface) {
      await queryInterface.dropTable("users");
   },
};
