import { Request, Response } from "express";
import {Stripe} from 'stripe'
import logger from "../log";
import { stripe } from "./config.payments";
import { IPayment } from "../interfaces/payments.interfaces";
import { Payments } from "../repositories/payments.repository";
import { Invoices } from "../repositories/invoices.repository";

export async function PaymentIntentUpdate(req: Request, res: Response) {
   const sig = req.headers["stripe-signature"] as string;
   if (!sig) return res.status(400).send("Missing Stripe Signature");
   let event;
   try {
      const secret = process.env.WEB_HOOK_PAYMENT_INTENT_SECRET as string;
      event = stripe.webhooks.constructEvent(req.body, sig, secret) as Stripe.Event;
   } catch (err: any) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
   }
   const intent = event.data.object as Stripe.PaymentIntent;
   const payment = await Payments.getById(intent.id);
   if (!payment) return res.status(404).send("Payment not found");

   switch (event.type) {
      case "payment_intent.succeeded":
         console.log(intent);
         if (intent.status === "succeeded") {
            const invoice = await Invoices.getById(payment.invoiceId);
            if (!invoice) return res.status(404).send("Invoice not found");
            invoice.status = "paid";
            await invoice.save();
         }
         payment.canceledAt = intent.canceled_at;
         payment.cancellationReason = intent.cancellation_reason;
         payment.status = intent.status;
         payment.updatedAt = new Date();
         await payment.save();
         break;
      case "payment_intent.payment_failed":
         console.log(intent);
         if (intent.status === "requires_action") {
            const invoice = await Invoices.getById(payment.invoiceId);
            if (!invoice) return res.status(404).send("Invoice not found");
            invoice.status = "failed";
            await invoice.save();
         }
         payment.canceledAt = intent.canceled_at;
         payment.cancellationReason = intent.cancellation_reason;
         payment.status = intent.status;
         payment.updatedAt = new Date();
         await payment.save();
         break;
      case "payment_intent.canceled":
         console.log(intent);
         if (intent.status === "canceled") {
            const invoice = await Invoices.getById(payment.invoiceId);
            if (!invoice) return res.status(404).send("Invoice not found");
            invoice.status = "canceled";
            await invoice.save();
         }
         payment.canceledAt = intent.canceled_at;
         payment.cancellationReason = intent.cancellation_reason;
         payment.status = intent.status;
         payment.updatedAt = new Date();
         await payment.save();
         break;

      default:
         console.log(`Unhandled event type ${event.type}`);
   }
   res.send();
}
export async function CreatePaymentIntent(req: Request, res: Response) {
   try {
      const invoiceId = parseInt(req.body.invoiceId, 10);
      if (!invoiceId) return res.status(400).send("Missing invoiceId");
      const invoice = await Invoices.getById(invoiceId);
      if (!invoice) return res.status(400).send("Invoice not found");

      //caso ja haja um pagamento para a invoice retorna o mesmo
      const check = await Payments.getByInvoiceId(invoiceId);
      if (check) return res.status(200).json({ client_secret: check.clientSecret });

      // se não houver um pagamento para a invoice cria um novo
      const paymentIntent = await stripe.paymentIntents.create({
         amount: Number(invoice.amount) * 100,
         currency: invoice.currency,
         automatic_payment_methods: { enabled: true },
         description: invoice.description,
      });

      const payment = {
         id: paymentIntent.id,
         object: paymentIntent.object,
         invoiceId: invoiceId,
         amount: paymentIntent.amount,
         clientSecret: paymentIntent.client_secret,
         status: paymentIntent.status,
      } as IPayment;

      //salvar pagamento no banco
      const result = await Payments.create(payment);
      if (!result) logger.error("PaymentIntent not created or occurred error at save!");

      res.status(200).json({ client_secret: paymentIntent.client_secret });
   } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal Server Error" });
   }
}
