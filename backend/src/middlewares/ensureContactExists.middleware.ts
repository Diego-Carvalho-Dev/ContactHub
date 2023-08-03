import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { iContactRepo } from "../interfaces/contact.interface";
import { Contact } from "../entities";

export const ensureContactExistsMiddleware = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const contactRepository: iContactRepo = AppDataSource.getRepository(Contact);

  const contactFind = await contactRepository.findOne({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (!contactFind) {
    throw new AppError("Contact not found!", 404);
  }
  return next();
};
