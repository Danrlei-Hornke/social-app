import { ChildrenProp } from "types/shared";

//- data contexts
import { UserProvider } from "../contexts/UserContext";

//- data context processors
export const DataProvider = ({ children }: ChildrenProp) => {
   return <UserProvider>{children}</UserProvider>;
};
