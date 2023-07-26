import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1690340490151 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('cardatabase', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('cardatabase', true);
  }
}
