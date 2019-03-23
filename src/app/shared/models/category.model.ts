export class CategoryModel {
  constructor(public id: number,
    public name: string,
    public item_group_name: string,
    public hasSubCategories: boolean,
    public images: string[],
    public checked: boolean,
    public sub_categories: CategoryModel[]) {}
}
