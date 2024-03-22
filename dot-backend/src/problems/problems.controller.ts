// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProblemDto } from './problems.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { AuthGuard } from 'src/shared/security/auth.guard';

@UseGuards(AuthGuard)
@Controller('problems')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getProblems() {
    return this.problemsService.getProblem();
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  createProblem(@Body() ProblemDto: ProblemDto) {
    return this.problemsService.createProblem(ProblemDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteProblem(@Param('id') id) {
    return this.problemsService.deleteProblemById(id);
  }
}
