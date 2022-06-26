import React, { useState, useEffect } from "react";
import { Row, Title, Container } from "./styles";
import { Header } from "components/header";
import { Btn } from "components/buttons";
import { IoMdAdd } from "react-icons/io";
import { Table } from "components/table";
import { PaymentService } from "services/api/payments";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export type Invoice = {
   id: number;
   userId: number;
   amount: number;
   currency: string;
   status: string;
   description: string;
   createdAt: Date;
   updatedAt: Date;
   expireAt: Date;
};

export const InvoicesPage = () => {
   const navigate = useNavigate();
   const server = new PaymentService();
   const [invoices, setInvoices] = useState([] as Invoice[]);

   const handlePay = (id: number) => navigate(`/invoices/${id}/pay`);
   const handleSubmit = async (e: React.MouseEvent) => {
      e.preventDefault();
      try {
         await server.createRandomInvoice();
         await getInvoices();
      } catch (error) {
         toast.error("Não foi possível criar uma fatura aleatoriamente!");
      }
   };
   async function getInvoices() {
      try {
         const server = new PaymentService();
         const response = await server.getAllInvoices();
         setInvoices(response.data);
      } catch (error: any) {
         return toast.error("Não foi possível obter as faturas!");
      }
   }

   useEffect(() => {
      getInvoices();
   }, []);

   return (
      <>
         <Header />
         <Row>
            <Title>Faturas</Title>
            <Btn.Create onClick={handleSubmit} style={{ maxWidth: 190 }}>
               <IoMdAdd size={24} color="white" />
               Nova Fatura
            </Btn.Create>
         </Row>
         <Container>
            <Table>
               <thead>
                  <tr>
                     <th id="head_1">ID</th>
                     <th id="head_2">Valor</th>
                     <th id="head_3">Status</th>
                     <th id="head_4">Descrição</th>
                     <th id="head_5">Data de criação</th>
                     <th id="head_6">Data de vencimento</th>
                     <th id="head_7">Ações</th>
                  </tr>
               </thead>
               <tbody>
                  {invoices.map((invoice) => (
                     <tr key={invoice.id}>
                        <td id="head_1">{invoice.id}</td>
                        <td id="head_2">R${parseFloat(`${invoice.amount}`).toFixed(2)}</td>
                        <td id="head_3">{invoice.status}</td>
                        <td id="head_4">{invoice.description}</td>
                        <td id="head_5">{new Date(invoice.createdAt).toLocaleString("pt-BR")}</td>
                        <td id="head_6">{new Date(invoice.expireAt).toLocaleString("pt-BR")}</td>
                        <td id="head_7">
                           {invoice.status !== "paid" && <Btn.Pay onClick={() => handlePay(invoice.id)}>Pagar</Btn.Pay>}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </Table>
         </Container>
      </>
   );
};
