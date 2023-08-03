import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import {
  IContactReturn,
  iContactRepo,
} from "../../interfaces/contact.interface";
import { returnContactWithClientSchema } from "../../schemas/contact.schema";

export const retrieveContactService = async (
  id: number
): Promise<IContactReturn> => {
  const contactRepository: iContactRepo = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      client: true,
    },
  });

  const contact = returnContactWithClientSchema.parse(findContact!);

  return contact;
};
