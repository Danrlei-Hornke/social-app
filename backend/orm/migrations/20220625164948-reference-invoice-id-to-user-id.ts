import { QueryInterface } from "sequelize";
module.exports = {
   async up(queryInterface: QueryInterface) {
      await queryInterface.addConstraint("invoices", {
         fields: ["userId"],
         type: "foreign key",
         name: "FK_invoices.userId_to_users.id",
         references: {
            table: "users",
            field: "id",
         },
         onDelete: "cascade",
         onUpdate: "cascade",
      });
   },
   async down(queryInterface: QueryInterface) {
      await queryInterface.removeConstraint("invoices", "FK_invoices.userId_to_users.id");
   },
};
