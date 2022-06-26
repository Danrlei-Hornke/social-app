import { Route, Routes } from "react-router-dom";
import { SingInPage } from "pages/public/login/login";
import { AuthRoute } from "components/auth";
import { IgOAuthCode } from "pages/public/oauth/igAuthCode";
import PaymentPage from "pages/private/invoices/pay";
import { InvoicesPage } from "pages/private/invoices";

export function Router() {
   return (
      <Routes>
         {/* Rota publica */}
         <Route path="/" element={<SingInPage />} />
         <Route path="/oauth/ig/*" element={<IgOAuthCode />} />

         {/* Rota autenticada Aninhada */}
         <Route path="/invoices" element={<AuthRoute redirect="/"/>}>
            <Route index element={<InvoicesPage />} />
            <Route path=":id/pay" element={<PaymentPage />} />
         </Route>
      </Routes>
   );
}
