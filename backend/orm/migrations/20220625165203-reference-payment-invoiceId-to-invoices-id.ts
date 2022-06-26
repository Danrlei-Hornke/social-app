import { QueryInterface } from "sequelize";
module.exports = {
   async up(queryInterface: QueryInterface) {
      await queryInterface.addConstraint("payments", {
         fields: ["invoiceId"],
         type: "foreign key",
         name: "FK_payments.invoiceId_to_invoices.id",
         references: {
            table: "invoices",
            field: "id",
         },
         onDelete: "cascade",
         onUpdate: "cascade",
      });
   },

   async down(queryInterface: QueryInterface) {
      await queryInterface.removeConstraint("payments", "FK_payments.invoiceId_to_invoices.id");
   },
};
