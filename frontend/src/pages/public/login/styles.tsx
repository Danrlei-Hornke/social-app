import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
   min-height: 100vh;
   background-color: #181818;
   padding: 0.5em;

   .book {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      min-width: 100vw;

      .cart {
         display: flex;
         flex-direction: column;
         padding: 2em;
         width: 10%;
         min-width: 400px;
         min-height: 450px;
         border-radius: 1em 0em 0em 1em;
         background-image: linear-gradient(to right, #82008f, #c0007a, #ea0c5f);

         img {
            width: 100%;
         }
      }
      .modal {
         display: flex;
         flex-direction: column;
         padding: 2em;
         width: 10%;
         min-width: 400px;
         min-height: 450px;
         border-radius: 0em 1em 1em 0em;
         background-color: #fff;

         h1 {
            font-size: 1.5em;
            font-weight: 600;
            color: #000;
            margin-bottom: 1em;
            font-family: var(--font-primary);
         }
      }

      @media screen and (max-width: 768px) {
         flex-direction: column;
         padding: .5em;
         .cart {
            border-radius: 1em 1em 0em 0em; 
            max-width: 450px;
            width: 80%;
         }

         .modal {
            border-radius: 0em 0em 1em 1em; 
            max-width: 450px;
            width: 80%;
           
            #actions {
               padding: 0.5em;
            }
         }
      }
   }
`;
