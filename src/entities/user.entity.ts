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
export class User {
  @PrimaryColumn("uuid")
  readonly user_id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Person, (person) => person.team_leader)
  team: Person[];

  constructor() {
    if (!this.user_id) {
      this.user_id = uuid();
    }
  }
}
