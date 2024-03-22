import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProblemsModule } from './problems/problems.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './shared/services/database-connection.service';
import { ThrottlerModule } from '@nestjs/throttler';
import { ClassificationsModule } from './classifications/classifications.module';

@Module({
  imports: [
    AuthModule,
    ProblemsModule,
    ClassificationsModule,
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
