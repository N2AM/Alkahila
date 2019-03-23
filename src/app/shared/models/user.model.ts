import { AddressModel } from "./address.model";

export class UserModel {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string,
    public password: string,
    public auth_token: string,
    public active: boolean // public addresses: AddressModel[]
  ) {}
}
