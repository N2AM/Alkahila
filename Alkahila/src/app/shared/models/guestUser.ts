export class GusetUserModel {
  constructor(
    public message: string,
    public data: {
      id: number;
      token: string;
      email: string;
      updated_at: Date;
      created_at: Date;
    }
  ) {}
}
