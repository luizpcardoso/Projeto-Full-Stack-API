import { Router } from "express";
import { userCreate } from "../controllers/users/userCreate.controller";

const routes = Router();

export const userRoutes: any = () => {
  routes.post("/users", userCreate);
  return routes;
};
