import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1660140420229 implements MigrationInterface {
    name = 'initialMigration1660140420229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("user_id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id"))`);
        await queryRunner.query(`CREATE TABLE "person" ("person_id" uuid NOT NULL, "name" character varying NOT NULL, "admitted_in" character varying NOT NULL, "alias" character varying NOT NULL, "officeOficeId" uuid, "teamLeaderUserId" uuid, CONSTRAINT "PK_403c951c5e9b776c16385a8940f" PRIMARY KEY ("person_id"))`);
        await queryRunner.query(`CREATE TABLE "ofices" ("ofice_id" uuid NOT NULL, "ofice_name" character varying NOT NULL, CONSTRAINT "PK_a16d2f2db990c09620edbf284be" PRIMARY KEY ("ofice_id"))`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_b337e35790a4ea1d95060ccbd35" FOREIGN KEY ("officeOficeId") REFERENCES "ofices"("ofice_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_2cf47adfcb5dd43b0216aa051a8" FOREIGN KEY ("teamLeaderUserId") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_2cf47adfcb5dd43b0216aa051a8"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_b337e35790a4ea1d95060ccbd35"`);
        await queryRunner.query(`DROP TABLE "ofices"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
