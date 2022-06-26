import React, { useState } from "react";
//import { UserProcessorContext } from "data/processors/UserProcessor";
import { Container } from "./styles";
import { Form } from "components/form";
import { Btn } from "components/buttons";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import IMAGE from "assets/images/login.png";
import { IG_APP_ID, IG_REDIRECT_URI } from "env/app";

export const SingInPage = () => {
   const [form, setForm] = useState({ email: "", password: "" });
   const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value });
   const handleIG = () => {
      window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${IG_APP_ID}&scope=user_profile,user_media&redirect_uri=${IG_REDIRECT_URI}&response_type=code`;
   };

   function handleSingIn(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      console.log(form);
   }

   return (
      <Container>
         <div className="book">
            <div className="cart">
               <img src={IMAGE} alt="cart" />
            </div>
            <div className="modal">
               <Form.Row style={{ padding: "0.5em" }}>
                  <h1>Bem vindo de volta</h1>
               </Form.Row>
               <Form.Container className="evenly" target="">
                  <Form.Group>
                     <Form.Label className="black">Email:</Form.Label>
                     <Form.Input className="black" type="email" name="email" value={form.email} onChange={changeForm} />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label className="black">Senha:</Form.Label>
                     <Form.Input
                        className="black"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={changeForm}
                     />
                  </Form.Group>
                  <Form.Row style={{ paddingTop: "2em" }} className="evenly" id="actions">
                     <Btn.Save type="button" onClick={handleSingIn}>
                        Entrar
                     </Btn.Save>
                     <Btn.IG type="button" onClick={handleIG}>
                        <BsInstagram />
                        Instagram
                     </Btn.IG>
                  </Form.Row>
                  <Form.Row style={{ paddingTop: "2em" }} className="evenly">
                     <Link to="/register">Cadastrar</Link>
                     <Link to="/forgot-password">Esqueceu a senha?</Link>
                  </Form.Row>
               </Form.Container>
            </div>
         </div>
      </Container>
   );
};
