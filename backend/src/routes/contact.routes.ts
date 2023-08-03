import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middeware";
import { contactSchema, updateContactSchema } from "../schemas/contact.schema";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureContactPermissionMiddleware } from "../middlewares/ensureContactPermission.middleware";
import { ensureContactExistsMiddleware } from "../middlewares/ensureContactExists.middleware";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  retrieveContactController,
  updateContactController,
} from "../controllers/contact.controllers";

export const contactRoutes = Router();

contactRoutes.use(ensureTokenIsValidMiddleware);

contactRoutes.post(
  "",
  ensureDataIsValidMiddleware(contactSchema),
  createContactController
);
contactRoutes.get("", listContactsController);

contactRoutes.get(
  "/:id",
  ensureContactExistsMiddleware,
  ensureContactPermissionMiddleware,
  retrieveContactController
);

contactRoutes.patch(
  "/:id",
  ensureContactExistsMiddleware,
  ensureContactPermissionMiddleware,
  ensureDataIsValidMiddleware(updateContactSchema),
  updateContactController
);
contactRoutes.delete(
  "/:id",
  ensureContactExistsMiddleware,
  ensureContactPermissionMiddleware,
  deleteContactController
);
