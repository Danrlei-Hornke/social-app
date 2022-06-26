import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "components/stripe/form";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { PaymentService } from "services/api/payments";
import { Header } from "components/header";
import { UserContext } from "data/contexts/UserContext";

const api_key = process.env.REACT_APP_STRIPE_API_KEY as string;
const stripePromise = loadStripe(api_key);

export default function PaymentPage() {
   const { id } = useParams();
   const navigate = useNavigate();
   const [clientSecret, setClientSecret] = useState(null);
   const { user, setUser } = useContext(UserContext);

   useEffect(() => {
      async function GetIntent() {
         if (!id) {
            toast.error("Não foi possível obter o id da fatura!");
            return navigate("/invoices");
         }
         if (user.invoiceId === Number(id)) return;
         try {
            const payments = new PaymentService();
            const response = await payments.getPaymentIntent(Number(id));
            setClientSecret(response.data.client_secret);
            setUser({ ...user, invoiceId: Number(id) });
         } catch (error) {
            toast.error("Não foi possível obter o o identificador da fatura para realizar o pagamento!");
            navigate("/invoices");
         }
      }
      GetIntent();
      // eslint-disable-next-line
   }, []);

   if (clientSecret === null) return null;
   const appearance = {
      variables: {
         colorPrimary: "#00e0f0",
         colorBackground: "#fff",
         colorText: "#818181",
         fontFamily: "Mulish, sans-serif",
         spacingUnit: "2px",
         borderRadius: "4px",
      },
   };
   const options = {
      clientSecret,
      appearance,
   } as any;

   return (
      <>
         <Header />
         <div className="container">
            <div className="payment-card">
               <div className="invoice-details">
                  <h1>Pagamento da fatura</h1>
                  <p>Valor:R$10,00</p>
                  <p>Descrição: Fatura de deste mes</p>
               </div>
               <div className="payment-container">
                  <Elements options={options} stripe={stripePromise}>
                     <CheckoutForm id={id} />
                  </Elements>
               </div>
            </div>
            <p className="payment-test">Test Card: 4242 4242 4242 4242 Validate: qualquer data futura CVC: Tres números</p>
         </div>
      </>
   );
}
