import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class Problems1711048675212 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'problems',
        columns: [
          {
            name: 'id',
            type: 'char',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'problemName',
            type: 'varchar',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'problems',
      new TableIndex({
        name: 'IDX_problems_NAME',
        columnNames: ['problemName'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('problems', 'IDX_problems_NAME');
    await queryRunner.dropTable('problems');
  }
}
