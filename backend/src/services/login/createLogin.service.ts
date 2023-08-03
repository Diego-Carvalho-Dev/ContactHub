import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { AppError } from "../../errors";
import { iClientRepo } from "../../interfaces/clients.interface";
import { ILogin } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const createLoginService = async (
  loginData: ILogin
): Promise<string> => {
  const clientRepository: iClientRepo = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOneBy({
    email: loginData.email,
  });

  if (!client) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, client.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      email: client.email,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(client.id),
    }
  );

  return token;
};
