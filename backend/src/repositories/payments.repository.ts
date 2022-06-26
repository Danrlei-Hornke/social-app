import { payments, IPaymentModel } from "../models/payments.model";
import { IPayment } from "interfaces/payments.interfaces";

export class Payments {
   static getById(id: string): Promise<IPaymentModel | null> {
      return payments.findByPk(id);
   }

   static getAll(): Promise<IPaymentModel[]> {
      return payments.findAll();
   }
   static create(payment: IPayment): Promise<IPayment> {
      return payments.create(payment);
   }

   static getByInvoiceId(invoiceId: number): Promise<IPaymentModel | null> {
      return payments.findOne({ where: { invoiceId } });
   }

   static delete(id: number): Promise<Number> {
      return payments.destroy({ where: { id: id } });
   }
}
