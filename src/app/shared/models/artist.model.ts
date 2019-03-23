import { ExhibitionsModel } from "./exhibitions.model";

export class ArtistModel {
    constructor(
    public company_id: any,
    public date_of_birth: string,
    public id: number,
    public name: string,
    public description: string,
    public phone: string,
    public email: string,
    public checked: boolean,
    public artist_of_the_month: boolean,
    public exhibitions: ExhibitionsModel[],
    public graduated_from: string,
    public logo: string){}

}
