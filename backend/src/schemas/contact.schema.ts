import { z } from "zod";
import { returnClientSchema } from "./clients.schema";

export const contactSchema = z.object({
  fullName: z.string().min(3).max(127),
  email: z.string().email().max(127).optional().nullable(),
  phone: z.string().max(45),

});

export const returnContactSchema = contactSchema.extend({
  id: z.number(),
  registerDate: z.date().optional(),
});

export const returnContactWithClientSchema = returnContactSchema.extend({
  client: returnClientSchema,
});

export const returnAllContactSchema = returnContactSchema.array();

export const updateContactSchema = contactSchema.partial();
