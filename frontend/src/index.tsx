import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { DataProvider } from "data/provider/DataProvider";
import { ToastContainer } from "react-toastify";
import { Router } from "routes";
import "assets/css/global.css";
import "react-toastify/dist/ReactToastify.css";
import "assets/css/stripe.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <DataProvider>
            <Router />
            <ToastContainer />
         </DataProvider>
      </BrowserRouter>
   </React.StrictMode>
);
