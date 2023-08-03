import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import {
  IAllContactReturn,
  iContactRepo,
} from "../../interfaces/contact.interface";
import { returnAllContactSchema } from "../../schemas/contact.schema";

export const listContactService = async (): Promise<IAllContactReturn> => {
  const contactRepository: iContactRepo = AppDataSource.getRepository(Contact);

  const findContacts: Array<Contact> = await contactRepository.find();

  const contacts = returnAllContactSchema.parse(findContacts);
  return contacts;
};
