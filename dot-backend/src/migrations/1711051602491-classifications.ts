import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class Classifications1711051602491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classifications',
        columns: [
          {
            name: 'id',
            type: 'char',
            length: '36',
            isPrimary: true,
          },

          {
            name: 'classificationName',
            type: 'text',
          },
          {
            name: 'answer',
            type: 'text',
          },
        ],
      }),
      true,
    );

    await queryRunner.addColumn(
      'classifications',
      new TableColumn({
        name: 'problemId',
        type: 'char',
        length: '36',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('classifications');
  }
}
