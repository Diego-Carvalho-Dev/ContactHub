import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import {
  IClientWithContact,
  iClientRepo,
} from "../../interfaces/clients.interface";
import { returnClientSchema } from "../../schemas/clients.schema";

export const retrieveClientService = async (
  id: string
): Promise<IClientWithContact> => {
  const clientRepository: iClientRepo = AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOne({
    where: {
      id: parseInt(id),
    },
    relations: {
      contact: true,
    },
  });

  const client = returnClientSchema.parse(findClient!);

  const contacts = findClient ? findClient.contact : [];

  return { client, contacts };
};
