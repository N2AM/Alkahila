import { ProductModel } from "./product.model";

export class CartItemModel {
  quantity: number;
  product: ProductModel;
  total: number;

  constructor(product: ProductModel, quantity: number) {
    this.quantity = quantity;
    this.product = product;
    this.total = quantity * product.standard_rate;
  }
}
