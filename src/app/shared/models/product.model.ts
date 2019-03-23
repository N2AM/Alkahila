import { AttributeModel } from "./attribute.model";

export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public description_en: string,
    public item_group: string,
    public item_code: string,
    public standard_rate: number,
    public uom: string,
    public weight: number,
    public is_favorite: number,
    public brand: string,
    public brand_id: number,
    public stock_qty: number,
    public category_name: string,
    public main_cat: { id: number; name: string },
    public sub_cat: { id: number; name: string },
    public has_attributes: number,
    public var_attributes: AttributeModel[],
    public images: string[]
  ) {}
}
