import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OAuth } from "services/oauth";
import { StorageService } from "services/storage";
import { UserContext } from "data/contexts/UserContext";

export const IgOAuthCode = () => {
   const navigate = useNavigate();
   const { user, setUser } = useContext(UserContext);

   useEffect(() => {
      async function getCode() {
         const Server = new OAuth();
         const searchParams = new URLSearchParams(window.location.search);
         const code = searchParams.get("code") as string;
         if (user.igCode === code) return;
         try {
            setUser({ ...user, igCode: code });
            const result = await Server.getIGAccessToken(code);
            if (result.data.token) {
               StorageService.set("x-access-token", result.data.token);
               navigate("/invoices", { replace: true });
            } else navigate("/", { replace: true });
         } catch (error) {
            console.log(error);
         }
      }
      getCode();
      // eslint-disable-next-line
   }, [navigate]);

   return <></>;
};
