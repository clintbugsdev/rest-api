import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateRequest from "./middleware/validateRequest";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Register User
  app.post("api/users", validateRequest(createUserSchema), createUserHandler);
  // Login

  // Get the User's Sessions

  // Logout
}
