import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Client } from "../entities";
import { IAllContactReturn } from "./contact.interface";
import {
  clientSchema,
  returnAllClientSchema,
  returnClientSchema,
} from "../schemas/clients.schema";

export type IClient = z.infer<typeof clientSchema>;
export type IClientReturn = z.infer<typeof returnClientSchema>;
export type IAllClientReturn = z.infer<typeof returnAllClientSchema>;
export type iClientRepo = Repository<Client>;
export type IUpdateClient = DeepPartial<IClient>;
export interface IClientWithContact {
  client: IClientReturn;
  contacts: IAllContactReturn;
}
