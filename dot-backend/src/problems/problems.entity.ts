import { Classifications } from 'src/classifications/classifications.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Entity,
  OneToMany,
} from 'typeorm';

@Entity()
export class Problems {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  problemName: string;

  @OneToMany(() => Classifications, (classification) => classification.problem)
  clasification: Classifications[];
}
