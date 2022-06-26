import { Router } from "express";
import { User } from "../middlewares/auth";
import { getIGLogin } from "../controllers/oauth.controller";
import { CreatePaymentIntent } from "../payments/services.payments";
import { GetAllInvoices, CreateAleatoryInvoices } from "../controllers/invoices.controller";
const route = Router();

route.get("/oauth/ig/access_token/:code", getIGLogin);
route.get("/invoices", User, GetAllInvoices);
route.get("/invoices/random", User, CreateAleatoryInvoices);
route.post("/payment/intent", User, CreatePaymentIntent);

export default route;
