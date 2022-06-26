import { Request, Response } from "express";
import logger from "../log";
import { Token } from "../types";
import { Jwt } from "../auth";
import { Invoices } from "../repositories/invoices.repository";

export async function GetAllInvoices(_req: Request, res: Response) {
   try {
      const token = Jwt.getLocals(res) as Token;
      const invoices = await Invoices.getByUserId(token.userId);
      res.status(200).json(invoices);
   } catch (error) {
      logger.error(error);
      return res.status(500).json({ message: "Internal server error" });
   }
}

export async function CreateAleatoryInvoices(_req: Request, res: Response) {
   try {
      const token = Jwt.getLocals(res) as Token;
      const invoice = await Invoices.create({
         userId: token.userId,
         status: "pending",
         amount: Math.floor(Math.random() * 100),
         currency: "brl",
         description: "aleatory test invoice",
         expireAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      });
      res.status(200).json(invoice);
   } catch (error) {
      logger.error(error);
      return res.status(500).json({ message: "Internal server error" });
   }
}

export async function getDetails(req: Request, res: Response) {
   try {
      const invoiceId = parseInt(req.params.invoiceId);
      const token = Jwt.getLocals(res) as Token;
      const invoice = await Invoices.getById(invoiceId);
      if (invoice == null || invoice.userId !== token.userId) {
         return res.status(403).json({ message: "Forbidden" });
      }
      res.status(200).json(invoice);
   } catch (error) {
      logger.error(error);
      return res.status(500).json({ message: "Internal server error" });
   }
}
