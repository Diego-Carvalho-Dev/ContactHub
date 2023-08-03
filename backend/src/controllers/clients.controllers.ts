import { Request, Response } from "express";
import { IClient, IUpdateClient } from "../interfaces/clients.interface";
import { createClientService } from "../services/clients/createClient.service";
import { listClientsService } from "../services/clients/listClient.service";
import { updateClientService } from "../services/clients/updateClient.service";
import { deleteClientService } from "../services/clients/deleteClient.service";
import { retrieveClientService } from "../services/clients/retrieveClient.service";

export const createClientController = async (
  req: Request,
  res: Response
) => {
  const clientData: IClient = req.body;

  const newClient = await createClientService(clientData);

  return res.status(201).json(newClient);
};

export const listClientsController = async (_: Request, res: Response) => {
  const clients = await listClientsService();

  return res.json(clients);
};

export const retrieveClientsController = async (
  req: Request,
  res: Response
) => {
  const id = req.client.id;
  const { client, contacts } = await retrieveClientService(id);

  const clientWithContacts = {
    client: client,
    contacts: contacts,
  };

  return res.json(clientWithContacts);
};

export const updateClientController = async (
  req: Request,
  res: Response
) => {
  const clientData: IUpdateClient = req.body;
  const id = parseInt(req.params.id);

  const updateClient = await updateClientService(clientData, id);

  return res.json(updateClient);
};

export const deleteClientController = async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  await deleteClientService(id);

  return res.status(204).send();
};
