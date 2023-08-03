import { Client } from "./clients.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 127 })
  fullName: string;

  @Column({ type: "varchar", length: 127, nullable: true })
  email?: string | undefined | null;

  @Column({ type: "varchar", length: 45 })
  phone: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  registerDate: Date;

  @ManyToOne(() => Client, (client) => client.contact)
  @JoinColumn()
  client: Client;
}
