export type IUser = {
   igCode: string;
   invoiceId: number;
};
export type UserContextType = {
   user: IUser;
   setUser: (user: IUser) => void;
};