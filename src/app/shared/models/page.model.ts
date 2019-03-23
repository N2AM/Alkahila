import {ProductModel} from './product.model';

export class PageModel {
  constructor(public products: ProductModel[] = []) {}
}
