import { IsNotEmpty, IsString } from 'class-validator';

export class ProblemDto {
  @IsString()
  @IsNotEmpty()
  problemName: string;
}
