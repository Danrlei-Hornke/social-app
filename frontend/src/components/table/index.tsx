import styled from "styled-components";

export const Table = styled.table`
   width: 100%;
   margin-top: 1em;
   border-collapse: collapse;
   overflow-x: auto;

   thead {
      width: 100%;
      display: table-header-group;
      font-size: 0.9em;
      border-left: 1.5px solid #fff;
      border-right: 1.5px solid #fff;
      border: 0.5px solid #fff;
      background-color: #fff;

      th {
         padding: 0.5rem 0.3em;
         font-size: 1em;
         text-align: center;
         font-family: var(--font-primary);
      }

      @media (max-width: 768px) {
         font-size: 0.7em;
         th {
            padding: 0.4rem 0.3em;
         }
      }
      @media (max-width: 500px) {
         font-size: 0.5em;
         th {
            padding: 0.3rem 0.3em;
         }
      }
      @media (max-width: 350px) {
         font-size: 0.3em;
         th {
            padding: 0.1rem 0.3em;
         }
      }
   }

   tbody {
      font-size: 0.7em;
      tr:first-child {
         border-top: 0px solid #fff;
      }
      tr:last-child {
         border-bottom: 1px solid #fff;
      }
      tr {
         border: 0.5px solid #fff;
         border-right: 1.5px solid #fff;
         td {
            outline: none;
            font-family: var(--font-primary);
            padding: 0.5rem 0.3em;
            font-size: 1em;
            text-align: center;
            color: #fff;
         }
      }

      @media (max-width: 768px) {
         font-size: 0.7em;
         td {
            padding: 0.4rem 0.3em;
         }
      }
      @media (max-width: 500px) {
         font-size: 0.5em;
         td {
            padding: 0.3rem 0.3em;
         }
      }
      @media (max-width: 350px) {
         font-size: 0.3em;
         td {
            padding: 0.1rem 0.3em;
         }
      }
   }
`;
