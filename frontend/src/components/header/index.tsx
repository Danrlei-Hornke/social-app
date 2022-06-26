import React from "react";
import { Container } from "./styles";
import { IoLogoJavascript } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

export const Header = () => {
   return (
      <Container>
         <div className="logo">
            <IoLogoJavascript size={24} color="white" />
            <h1>IG APP</h1>
         </div>
         <FiMenu className="menu-svg" size={35} color="white" />
      </Container>
   );
};
