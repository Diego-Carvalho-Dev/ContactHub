import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middeware";
import { clientSchema, updateClientSchema } from "../schemas/clients.schema";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExists.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureClientExistsMiddleware } from "../middlewares/ensureClientExists.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import {
  createClientController,
  deleteClientController,
  listClientsController,
  retrieveClientsController,
  updateClientController,
} from "../controllers/clients.controllers";

export const clientsRoutes = Router();

clientsRoutes.post(
  "",
  ensureEmailExistsMiddleware,
  ensureDataIsValidMiddleware(clientSchema),
  createClientController
);

clientsRoutes.use(ensureTokenIsValidMiddleware);

clientsRoutes.get("", listClientsController);

clientsRoutes.get(
  "/:id",
  ensureClientExistsMiddleware,
  retrieveClientsController
);

clientsRoutes.patch(
  "/:id",
  ensureClientExistsMiddleware,
  ensureIsOwnerMiddleware,
  ensureDataIsValidMiddleware(updateClientSchema),
  updateClientController
);
clientsRoutes.delete(
  "/:id",
  ensureClientExistsMiddleware,
  ensureIsOwnerMiddleware,
  deleteClientController
);

