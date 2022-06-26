export interface IPayment {
   id: string;
   object: string;
   invoiceId: number;
   clientSecret: string;
   cancellationReason: string | null;
   amount: number;
   status: string;
   createdAt: Date;
   updatedAt: Date;
   canceledAt: number | null;
}
