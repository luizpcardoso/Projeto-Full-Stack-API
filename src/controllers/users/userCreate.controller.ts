import { Request, Response } from "express";

export const userCreate = (req: Request, res: Response) => {
  return res.status(201).send("teste");
};
