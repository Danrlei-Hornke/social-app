import { CreateApiInstance } from "./config";

export class PaymentService {
   private api = CreateApiInstance("https://social-login-ig-api.herokuapp.com");

   async getPaymentIntent(invoiceId: number) {
      return await this.api.post("/payment/intent", { invoiceId });
   }

   async createRandomInvoice() {
      return await this.api.get("/invoices/random");
   }

   async getAllInvoices() {
      return await this.api.get("/invoices");
   }
}
