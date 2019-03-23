export class ExhibitionsModel {
  constructor(
    public id: number,
    public exhibition: string,
    public exhibition_description: string,
    public date: string,
    public location: string,
    public brand_id: string,
    public created_at: Date,
    public updated_at: Date
  ) {}
}
