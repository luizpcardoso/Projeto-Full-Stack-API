import { Request, Response } from "express";

import { userCreateService } from "../../srvices/userCreate.service";

export const userCreate = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userCreateService({ name, email, password });
    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
