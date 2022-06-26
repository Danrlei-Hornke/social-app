import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

type Props = {
   id: string | undefined;
};
export default function CheckoutForm({ id }: Props) {
   const navigate = useNavigate();
   const stripe = useStripe();
   const elements = useElements();
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!stripe || !elements) return;
      setIsLoading(true);
      const { error } = await stripe.confirmPayment({
         elements,
         confirmParams: { return_url: `https://social-login-ig.herokuapp.com/invoices/${id}/pay` },
      });
      if (error.type === "card_error" || error.type === "validation_error") toast.error(error.message || "");
      else toast.error(`Um erro inesperado ocorreu Erro:${error.type}.`);
      setIsLoading(false);
   };

   useEffect(() => {
      if (!stripe) return;
      const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
      if (!clientSecret) return;

      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
         switch (paymentIntent?.status) {
            case "succeeded":
               toast.success("Fatura paga com sucesso!");
               break;
            case "processing":
               toast.warn("Seu pagamento esta sendo processado.");
               break;
            case "requires_payment_method":
               toast.error("Seu pagamento falhou. Por favor, tente novamente.");
               break;
            default:
               toast.error("Seu pagamento falhou. Por favor, tente novamente.");
               break;
         }
      });
      navigate("/invoices");
   }, [stripe, navigate]);

   return (
      <form id="payment-form" onSubmit={handleSubmit}>
         <PaymentElement id="payment-element" />
         <button className="btn-stripe" disabled={isLoading || !stripe} id="submit">
            <span id="button-text">{isLoading ? <div className="spinner" id="spinner"></div> : "Pagar"}</span>
         </button>
      </form>
   );
}
