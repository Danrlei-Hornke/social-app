import { Response, Request, response } from "express";
import { IG_Basic, IG_Graph } from "../services/oauth-ig";
import { IUser } from "../interfaces/user.interfaces";
import { Jwt } from "../auth";
import logger from "../log";
import { Invoices } from "../repositories/invoices.repository";
import { Users } from "../repositories/user.repository";

export async function getIGLogin(req: Request, res: Response) {
   try {
      const code = req.params.code as string;
      if (!code) return res.status(422).send("Missing code");
      const data = {
         client_id: "994396001222115",
         client_secret: "fc74264bbd409c00bfc0e1fc607e1a5d",
         grant_type: "authorization_code",
         redirect_uri: "https://social-login-ig.herokuapp.com/oauth/ig/",
         code: code,
      };

      const send = new URLSearchParams(data);
      const response = await IG_Basic.post("/oauth/access_token", send);
      if (response.status === 200) {
         const { access_token, user_id } = response.data;
         const data = await IG_Graph.get(`/me?fields=id,username&access_token=${access_token}`);
         if (data.status === 200) {
            let user;
            user = await Users.getByIgId(data.data.id);
            if (!user) {
               const newUser = {
                  igId: data.data.id,
                  igToken: access_token,
                  firstName: data.data.username,
               } as IUser;
               user = await Users.create(newUser);
            }
            const token = await Jwt.sign(user.id);
            res.status(200).json({
               token: token,
               igId: user.igId,
               user_id: user_id,
               firstName: user.firstName,
            });
         } else {
            res.status(500).json({
               message: "Não foi possível obter o os dados do seu usuário no instagram",
               ...data.data,
            });
         }
      } else {
         res.status(500).send(response.data);
      }
   } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
   }
}
