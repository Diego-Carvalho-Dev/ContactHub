import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { AppError } from "../../errors";
import {
  IContactReturn,
  IUpdateContact,
  iContactRepo,
} from "../../interfaces/contact.interface";
import { returnContactSchema } from "../../schemas/contact.schema";

export const updateContactService = async (
  newContactData: IUpdateContact,
  id: number
): Promise<IContactReturn> => {
  if (Object.keys(newContactData).length === 0) {
    throw new AppError("invalid data!", 400);
  }

  const contactRepository: iContactRepo = AppDataSource.getRepository(Contact);

  const oldContactData = await contactRepository.findOneBy({
    id: id,
  });

  const contact = contactRepository.create({
    ...oldContactData,
    ...newContactData,
  });

  await contactRepository.save(contact);

  const updatedContact = returnContactSchema.parse(contact);
  return updatedContact;
};
