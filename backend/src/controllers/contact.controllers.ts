import { Request, Response } from "express";
import { IContact, IUpdateContact } from "../interfaces/contact.interface";
import { createContactService } from "../services/contact/createContact.service";
import { listContactService } from "../services/contact/listContact.service";
import { retrieveContactService } from "../services/contact/retrieveContact.service";
import { updateContactService } from "../services/contact/updateContact.service";
import { deleteContactService } from "../services/contact/deleteContact.service";

export const createContactController = async (
  req: Request,
  res: Response
) => {
  const contactData: IContact = req.body;
  const clientId = parseInt(req.client.id);

  const newContact = await createContactService(contactData, clientId);

  return res.status(201).json(newContact);
};

export const listContactsController = async (
  _: Request,
  res: Response
) => {
  const contact = await listContactService();

  return res.json(contact);
};

export const retrieveContactController = async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const contact = await retrieveContactService(id);

  return res.json(contact);
};

export const updateContactController = async (
  req: Request,
  res: Response
) => {
  const contactData: IUpdateContact = req.body;
  const id = parseInt(req.params.id);

  const updateContact = await updateContactService(contactData, id);

  return res.json(updateContact);
};

export const deleteContactController = async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  await deleteContactService(id);

  return res.status(204).send();
};
