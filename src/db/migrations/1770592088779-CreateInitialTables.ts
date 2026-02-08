import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialTables1770592088779 implements MigrationInterface {
    name = 'CreateInitialTables1770592088779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."user_status_enum" AS ENUM('A', 'I')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "status" "public"."user_status_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."user_status_enum"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "status" character varying NOT NULL`);
    }

}
