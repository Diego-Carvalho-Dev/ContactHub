import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";

export const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientId = req.client.id;
  const reqClientId = parseInt(req.params.id);

  if (parseInt(clientId) !== reqClientId) {
    return res
      .status(401)
      .json({ message: "You don`t have permissions." });
  }

  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      id: parseInt(clientId),
    },
    relations: {
      contact: true,
    },
  });

  if (!client) {
    return res.status(404).json({ message: "Client not found!" });
  }

  return next();
};
