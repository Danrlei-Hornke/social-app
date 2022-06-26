import * as React from "react";
import { IUser, UserContextType } from "types/user";
import { ChildrenProp } from "types/shared";

export const USER_CONTEXT_DEFAULT = {
   igCode: "",
   invoiceId: 0,
} as IUser;

export const UserContext = React.createContext<UserContextType>({ user: USER_CONTEXT_DEFAULT } as UserContextType);
export const UserProvider: React.FC<ChildrenProp> = ({ children }) => {
   const [user, setUser] = React.useState<IUser>(USER_CONTEXT_DEFAULT);
   return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
