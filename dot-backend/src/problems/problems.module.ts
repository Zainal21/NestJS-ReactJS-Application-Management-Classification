import { Module } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { ProblemsController } from './problems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problems } from './problems.entity';
import { Users } from 'src/auth/entities/users.entity';
import { Classifications } from 'src/classifications/classifications.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Problems, Users, Classifications])],
  controllers: [ProblemsController],
  providers: [ProblemsService],
})
export class ProblemsModule {}
