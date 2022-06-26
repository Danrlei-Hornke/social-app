import { CreateApiInstance } from "services/api/config";

export class OAuth {
   private ig = CreateApiInstance("https://social-login-ig-api.herokuapp.com");
   public async getIGAccessToken(code: string) {
      return await this.ig.get(`/oauth/ig/access_token/${code}`);
   }
}
