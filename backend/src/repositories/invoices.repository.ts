import { invoices, IInvoiceModel } from "../models/invoices.model";
import { IInvoice } from "../interfaces/invoices.interfaces";

export class Invoices {
   static getById(id: number): Promise<IInvoiceModel | null> {
      return invoices.findByPk(id);
   }

   static getAll(): Promise<IInvoiceModel[]> {
      return invoices.findAll();
   }

   static getByUserId(userId: number): Promise<IInvoiceModel[]> {
      return invoices.findAll({ where: { userId } });
   }

   static create(invoice: IInvoice): Promise<IInvoice> {
      return invoices.create(invoice);
   }

   static delete(id: number): Promise<Number> {
      return invoices.destroy({ where: { id: id } });
   }
}
