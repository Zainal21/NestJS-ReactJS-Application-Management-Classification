import { Users } from 'src/auth/entities/users.entity';
import { Problems } from 'src/problems/problems.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Entity,
} from 'typeorm';

@Entity()
export class Classifications {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  classificationName: string;

  @ManyToOne(() => Problems, (problem) => problem.clasification, {
    cascade: ['update'],
  })
  problem: Problems;

  @Column({
    type: 'text',
  })
  answer: string;
}
