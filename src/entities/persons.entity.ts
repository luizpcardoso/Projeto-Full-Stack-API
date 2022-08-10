import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from "typeorm";

import { v4 as uuid } from "uuid";

import { User } from "./user.entity";
import { Ofices } from "./ofices.entity";

@Entity()
export class Person {
  @PrimaryColumn("uuid")
  readonly person_id: string;

  @Column()
  name: string;

  @ManyToOne(() => Ofices, (ofice) => ofice.persons)
  office: Ofices;

  @Column()
  admitted_in: string;

  @Column()
  alias: string;

  @ManyToOne(() => User, (user) => user.team)
  team_leader: User;
}
