import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialTables1769210848654 implements MigrationInterface {
    name = 'CreateInitialTables1769210848654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(70) NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "city" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "level_reservoir" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "timestamp" TIMESTAMP NOT NULL DEFAULT now(), "level" double precision NOT NULL, "reservoir_id" uuid, CONSTRAINT "PK_82c4809a9d592064a68591b715e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "prevision" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "prevision_value" double precision, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "reservoir_id" uuid, CONSTRAINT "PK_a158e6160d9f4da3be3ba4543d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservoir" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "password" character varying(50) NOT NULL, "status" character varying(10) NOT NULL, "capacity" character varying(50) NOT NULL, "latitude" numeric(9,6) NOT NULL, "longitude" numeric(9,6) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "city_id" uuid, CONSTRAINT "PK_1725b9f10fbd5f56c5f6e6e29af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "level_reservoir" ADD CONSTRAINT "FK_45e8596b2d17c9185f8318ffd57" FOREIGN KEY ("reservoir_id") REFERENCES "reservoir"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "prevision" ADD CONSTRAINT "FK_7e2e9843028f39efc0333180c66" FOREIGN KEY ("reservoir_id") REFERENCES "reservoir"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservoir" ADD CONSTRAINT "FK_69cf6e337c93d9c3f31b366c9e3" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservoir" DROP CONSTRAINT "FK_69cf6e337c93d9c3f31b366c9e3"`);
        await queryRunner.query(`ALTER TABLE "prevision" DROP CONSTRAINT "FK_7e2e9843028f39efc0333180c66"`);
        await queryRunner.query(`ALTER TABLE "level_reservoir" DROP CONSTRAINT "FK_45e8596b2d17c9185f8318ffd57"`);
        await queryRunner.query(`DROP TABLE "reservoir"`);
        await queryRunner.query(`DROP TABLE "prevision"`);
        await queryRunner.query(`DROP TABLE "level_reservoir"`);
        await queryRunner.query(`DROP TABLE "city"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
