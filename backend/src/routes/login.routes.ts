import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middeware";
import { createLoginSchema } from "../schemas/login.schema";
import { createLoginController } from "../controllers/login.controllers";

export const loginRoutes = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleware(createLoginSchema),
  createLoginController
);
