import { AppDataSource } from "../../data-source";
import { Client, Contact } from "../../entities";
import { AppError } from "../../errors";
import { iClientRepo } from "../../interfaces/clients.interface";
import {
  IContact,
  IContactReturn,
  iContactRepo,
} from "../../interfaces/contact.interface";
import { returnContactSchema } from "../../schemas/contact.schema";

export const createContactService = async (
  contactData: IContact,
  clientId: number
): Promise<IContactReturn> => {
  const clientRepository: iClientRepo = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const contactRepository: iContactRepo = AppDataSource.getRepository(Contact);

  const contact: Contact = contactRepository.create({
    ...contactData,
    client: client!,
  });

  await contactRepository.save(contact);

  return returnContactSchema.parse(contact);
};
