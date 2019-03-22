export class AddressModel {
  constructor(
    public address_title: string,
    public address_id: number,
    public lat: number,
    public lng: number,
    public address_phone: string,
    public street: string,
    public nearest_landmark: string,
    public district_id: string,
    public warehouse: string,
    public city: string
  ) {}
}
