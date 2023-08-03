import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";

export const ensureContactPermissionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactId = parseInt(req.params.id);
  const clientId = req.client.id;

  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOne({
    where: {
      id: contactId,
      client: {
        id: parseInt(clientId),
      },
    },
  });

  if (!findContact) {
    return res
      .status(401)
      .json({ message: "You don`t have permissions." });
  }

  next();
};
