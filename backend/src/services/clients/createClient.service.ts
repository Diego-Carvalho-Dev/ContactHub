import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import {
  IClient,
  IClientReturn,
  iClientRepo,
} from "../../interfaces/clients.interface";
import { returnClientSchema } from "../../schemas/clients.schema";

export const createClientService = async (
  clientData: IClient
): Promise<IClientReturn> => {
  const clientRepository: iClientRepo = AppDataSource.getRepository(Client);

  const client: Client = clientRepository.create(clientData);

  await clientRepository.save(client);

  const newClient = returnClientSchema.parse(client);

  return newClient;
};
