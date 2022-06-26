import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   height: 55px;
   background-color: #181818;
   border: 2px solid #515151;

   .logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0;
      padding-left: 10px;

      h1 {
         font-size: 1.2m;
         color: white;
         margin-left: 0.5em;
      }
   }

   .menu-svg {
      margin-right: 1em;
   }
`;


