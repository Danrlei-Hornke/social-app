import React from "react";
import { StorageService } from "services/storage";
import { Navigate, Outlet } from "react-router-dom";

/*Função que retorna caso o usuário esta autenticado,
  pode estar em outro arquivo só deve ter um retorno boolean */
function isAuth(): boolean {
   const token = StorageService.get("x-access-token", "");
   if (token == null || token === "")  return false;
   return true;
}

export type AuthRouteProps = {
   redirect: string;
   outlet?: JSX.Element;
};

export function AuthRoute({ redirect, outlet }: AuthRouteProps) {
   if (!isAuth()) return <Navigate to={redirect}></Navigate>;
   if (outlet) return outlet;
   else return <Outlet />;
}
