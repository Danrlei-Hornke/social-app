import { users, IUserModel } from "../models/user.model";
import { IUser } from "../interfaces/user.interfaces";

export class Users {
   static getById(id: number): Promise<IUserModel | null> {
      return users.findByPk(id);
   }

   static getByIgId(igId: number): Promise<IUserModel | null> {
      return users.findOne({ where: { igId } });
   }

   static getByEmail(email: string): Promise<IUserModel | null> {
      return users.findOne({ where: { email } });
   }

   static create(user: IUser): Promise<IUser> {
      return users.create(user);
   }

   static delete(id: number): Promise<Number> {
      return users.destroy({ where: { id: id } });
   }
}
