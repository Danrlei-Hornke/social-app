export interface IInvoice {
   id?: number;
   userId: number;
   amount: number;
   currency: string;
   status: string;
   description: string;
   createdAt?: Date;
   updatedAt?: Date;
   expireAt: Date;
}
