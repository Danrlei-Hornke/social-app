import styled from "styled-components";

const Base = styled.button`
   border-radius: 4px;
   cursor: pointer;
   font-size: 1em;
   font-weight: bold;
   padding: 0.5em 1em;
   text-align: center;
   transition: all 0.2s ease-in-out;
   border: 1.5px solid rgba(255, 255, 255, 0.1);

   display: flex;
   align-items: center;
   justify-content: center;
   width: 98%;
   margin: 0.3em;

   svg,
   img {
      margin-right: 0.5em;
   }
`;

const Delete = styled(Base)`
   background-color: #c60000;
   color: #000;
   &:hover {
      background-color: #b30000;
   }
`;
const Edit = styled(Base)`
   background-color: #fff200;
   color: #000;
   &:hover {
      background-color: #e6e600;
   }
`;
const Save = styled(Base)`
   background-color: #0072d6;
   color: #000;
   &:hover {
      background-color: #0059b3;
   }
`;

const Create = styled(Base)`
   background-color: transparent;
   color: #fff;
   &:hover {
      background-color: #b5b5b5;
   }
`;

const IG = styled(Base)`
   background-image: linear-gradient(to right, #c0007a, #ea0c5f, #ff5341);
   background-size: 200% auto;
   background-position: center;
   color: #fff;
   &:hover {
      background-image: linear-gradient(to right, #82008f, #c0007a, #ea0c5f);
   }
`;

const Pay = styled(Base)`
   background-color: #0072d6;
   color: #fff;
   padding: .15em;
   margin: 0;

   &:hover {
      background-color: #0059b3;
   }
`;

export const Btn = {
   Delete,
   Edit,
   Save,
   Create,
   IG,
   Pay,
};
