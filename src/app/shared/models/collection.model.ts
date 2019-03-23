import {ProductModel} from './product.model';

export class CollectionModel {
  constructor(public id: number, public name: string, public sortno: number, public items: ProductModel[]) {}
}
