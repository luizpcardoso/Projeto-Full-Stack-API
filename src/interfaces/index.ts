export interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  team: object;

  cart: any;
}
