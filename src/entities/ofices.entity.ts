import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Person } from "./persons.entity";

@Entity()
export class Ofices {
  @PrimaryColumn("uuid")
  readonly ofice_id: string;

  @Column()
  ofice_name: string;

  @OneToMany(() => Person, (person) => person.office)
  persons: Person[];
}
