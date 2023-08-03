import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { iContactRepo } from "../../interfaces/contact.interface";

export const deleteContactService = async (id: number): Promise<void> => {
  const contactRepository: iContactRepo = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
    where: {
      id: id,
    },
  });

  await contactRepository.remove(contact!);
};
