import Stripe from "stripe";
const SECRET_KEY = process.env.STRIPE_SECRET_KEY as string;
export const stripe = new Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });
