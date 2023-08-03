import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { iClientRepo } from "../../interfaces/clients.interface";

export const deleteClientService = async (id: number): Promise<void> => {
  const clientRepository: iClientRepo = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      id: id,
    },
    relations: ["contact"],
  });

  const contacts = client!.contact;
  for (const contact of contacts) {
    await clientRepository.manager.remove(contact);
  }

  await clientRepository.remove(client!);
};
