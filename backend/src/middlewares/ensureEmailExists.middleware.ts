import { Request, Response, NextFunction } from "express";
import { iClientRepo } from "../interfaces/clients.interface";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import { AppError } from "../errors";

export const ensureEmailExistsMiddleware = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const clientRepository: iClientRepo = AppDataSource.getRepository(Client);

  const emailFind = await clientRepository.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!!emailFind) {
    throw new AppError("Email already exists", 409);
  }
  return next();
};
