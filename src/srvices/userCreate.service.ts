import { IUserCreate } from "../interfaces";
import { IUser } from "../interfaces";
import { User } from "../entities/user.entity";

import { AppDataSource } from "../data-source";

import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

export const userCreateService = async ({
  name,
  email,
  password,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const newUser: IUser = {
    user_id: uuidv4(),
    name: name,
    email: email.toLocaleLowerCase(),
    password: bcrypt.hashSync(password, 10),
  };
  userRepository.create(newUser);
  await userRepository.save(newUser);
  return newUser;
};
