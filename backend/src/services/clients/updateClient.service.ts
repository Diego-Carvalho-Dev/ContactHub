import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { AppError } from "../../errors";
import {
  IClientReturn,
  IUpdateClient,
  iClientRepo,
} from "../../interfaces/clients.interface";
import { returnClientSchema } from "../../schemas/clients.schema";

export const updateClientService = async (
  newClientData: IUpdateClient,
  id: number
): Promise<IClientReturn> => {
  if (Object.keys(newClientData).length === 0) {
    throw new AppError("invalid data!", 400);
  }

  const clientRepository: iClientRepo = AppDataSource.getRepository(Client);

  const oldClientData = await clientRepository.findOneBy({
    id: id,
  });

  const client = clientRepository.create({
    ...oldClientData,
    ...newClientData,
  });

  await clientRepository.save(client);

  const updatedClient = returnClientSchema.parse(client);
  return updatedClient;
};
