import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import {
  IAllClientReturn,
  iClientRepo,
} from "../../interfaces/clients.interface";
import { returnAllClientSchema } from "../../schemas/clients.schema";

export const listClientsService = async (): Promise<IAllClientReturn> => {
  const clientRepository: iClientRepo = AppDataSource.getRepository(Client);

  const findClients: Array<Client> = await clientRepository.find();

  const clients = returnAllClientSchema.parse(findClients);
  return clients;
};
