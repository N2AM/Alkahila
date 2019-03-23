export class EventModel {
  constructor(
    public id: number,
    public name_en: string,
    public name_ar: string,
    public time_from: string,
    public time_to: string,
    public image: string[],
    public address: string
  ) {}
}
