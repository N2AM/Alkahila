import { CartItemModel } from "./cart-item.model";
import { AddressModel } from "./address.model";

export class OrderModel {
  constructor(
    public order_id: number,
    public user_id: number,
    public payment_method: string,
    public date: string,
    public status: string,
    public address_id: number,
    public shipping_rate: number,
    public cart: CartItemModel[],
    public user: { name: string; phone: number; id: number },
    public address: AddressModel,
    public final_total_price: number,
    public image: string
  ) {}
}
