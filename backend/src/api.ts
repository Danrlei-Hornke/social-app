import express, { Response, Request } from "express";
import logger from "./log";
import helmet from "helmet";
import cors from "cors";
import router from "./routes";
import { PaymentIntentUpdate } from "./payments/services.payments";

export const api = express();
const corsOptions = {
   origin: process.env.CORS_ALLOW_ORIGIN || "*",
   methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
   allowedHeaders: ["Content-Type", "x-access-token", "stripe-signature"],
   optionsSuccessStatus: 200,
};

api.use(cors(corsOptions));
api.use(helmet());
api.post("/webhook/payment/intent/update", express.raw({ type: "application/json" }), PaymentIntentUpdate);
api.use(express.urlencoded({ extended: false }));
api.use(express.json());
api.use(router);

api.use("/", (_req: Request, res: Response) => {
   res.status(403).json({ message: "Ops, Não autorizado :(!" });
});
api.use((_error: any, res: Response) => {
   logger.error(_error);
   res.status(500).json({ message: "Erro interno do servidor!" });
});
