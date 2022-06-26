import styled from "styled-components";

const Container = styled.form`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   width: 100%;
   padding: 0;

   .evenly {
      justify-content: space-evenly;
      height: 100%;
   }
`;
const Group = styled.div`
   display: flex;
   position: relative;
   width: 100%;
   flex-direction: column;
   padding-right: 1em;
   @media (max-width: 768px) {
      padding: 0.7em;
   }

   .btn-hide {
      position: absolute;
      right: 1.5em;
      top: 2.3em;
      height: 24px;
      width: 24px;
      border: 0;
      background: transparent;

      @media (max-width: 500px) {
         top: 2.35em;
         right: 2.3em;
         height: 20px;
         width: 20px;
      }
   }
`;
const Label = styled.label`
   font-size: 1em;
   color: #fff;
   padding-top: 6px;
   padding-bottom: 3px;
   font-weight: 600;
   font-family: var(--font-primary);
   @media (max-width: 500px) {
      padding-top: 0.3em;
      padding-bottom: 0.1em;
      font-size: 0.7em;
   }

   &.black {
      color: #000;
   }
`;
const Input = styled.input`
   width: 100%;
   min-height: 2.3em;
   font-family: var(--font-primary);
   font-weight: 600;
   border-radius: 3px;
   padding-left: 1em;
   font-size: 1em;
   color: #fff;
   border: 1px solid #fff;

   @media (max-width: 768px) {
      padding-left: 3px;
      font-size: 0.9em;
   }

   &.black {
      border: 1px solid #000;
      color: #000;
   }

   &[type="file"] {
      border: none;
      padding: 0.8em;
   }
`;
const Select = styled.select`
   width: 100%;
   min-height: 2.3em;
   font-family: var(--font-primary);
   font-weight: 600;
   border-radius: 3px;
   padding-left: 1em;
   font-size: 1em;
   border: 1px solid #fff;

   @media (max-width: 768px) {
      padding-left: 3px;
      font-size: 0.9em;
   }
   option {
      font-size: 0.9em;
      padding: 1em;
      font-family: var(--font-primary);
      font-weight: 600;
   }
   &.black {
      border: 1px solid #000;
      color: #000;
   }
`;

const Row = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: 100%;
   &.end {
      justify-content: flex-end;
   }
   &.around {
      justify-content: space-around;
   }
   &.start {
      justify-content: flex-start;
   }
   &.between {
      justify-content: space-between;
   }
   &.evenly {
      justify-content: space-evenly;
   }

   @media (max-width: 768px) {
      flex-direction: column;
   }
`;
export const Form = {
   Container,
   Group,
   Row,
   Label,
   Input,
   Select,
};
