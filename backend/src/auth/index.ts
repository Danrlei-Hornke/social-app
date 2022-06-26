import { Response } from "express";
import { Token } from "../types";
import jwt, { VerifyOptions } from "jsonwebtoken";
import logger from "../log";

export class Jwt {
   static publicKey = process.env.RSA_PUBLIC_KEY as string;
   static privateKey = process.env.RSA_PRIVATE_KEY as string;
   static expires = parseInt(`${process.env.JWT_EXPIRES}`, 10);

   static async sign(userId: number) {
      try {
         let token: Token = { userId };
         return jwt.sign(token, Jwt.privateKey, { expiresIn: Jwt.expires, algorithm: "RS512" });
      } catch (error) {
         logger.error(error);
         return null;
      }
   }
   static async verify(token: string): Promise<Token | null> {
      try {
         const result = jwt.verify(token, Jwt.publicKey, { algorithm: ["RS512"] } as VerifyOptions) as Token;
         return {
            userId: result.userId,
            jwt: token,
         };
      } catch (error) {
         return null;
      }
   }
   static getLocals(res: Response) {
      const locals = res.locals.payload as Token;
      if (!locals) return res.status(401).json({ message: "Locals payload not found!" });
      return locals;
   }
}
