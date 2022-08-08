import { Express } from "express";
import { userRoutes } from "./userRoutes";

export const appRoutes = (app: Express) => {
  app.use("/api", userRoutes());
};
