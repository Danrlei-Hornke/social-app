import { Request, Response } from "express";
import { Jwt } from "../auth";

export async function User(req: Request, res: Response, next: any) {
   try {
      const token = req.headers["x-access-token"] as string;
      if (!token) return res.status(422).json({ message: "x-access-token header is required!" });

      const result = await Jwt.verify(token);
      if (!result) return res.status(403).json({ message: "x-access-token is invalid!" });
      res.locals.payload = {
         userId: result.userId,
         jwt: result.jwt,
      };
      next();
   } catch (error) {
      return res.status(500).json({ message: "Internal server error!" });
   }
}
