import { Request, Response } from "express";

export const userCreate = (req: Request, res: Response) => {
  try {
    return res.status(201).send("teste");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
