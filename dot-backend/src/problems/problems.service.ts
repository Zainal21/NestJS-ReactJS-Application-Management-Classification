import { ProblemDto } from './problems.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Problems } from './problems.entity';
import { Repository } from 'typeorm';
import { ApiResponse } from 'src/shared/utils/api-response.interface';
import { Users } from 'src/auth/entities/users.entity';

@Injectable()
export class ProblemsService {
  constructor(
    @InjectRepository(Problems) private problemRepository: Repository<Problems>,
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  /**
   * [getProblem ]
   *
   * @param   {string<ApiResponse>}   id  [id ]
   *
   * @return  {Promise<ApiResponse>}      [return ]
   */
  async getProblem(): Promise<ApiResponse> {
    const problem = await this.problemRepository.find();

    if (!problem) throw new NotFoundException('problem not found');

    return {
      statusCode: 200,
      message: 'Problems get successfully',
      data: problem,
    };
  }

  /**
   * [createProblem ]
   *
   * @param   {ProblemDto<ApiResponse>}  ProblemDto  [ProblemDto ]
   *
   * @return  {Promise<ApiResponse>}                 [return ]
   */
  async createProblem(ProblemDto: ProblemDto): Promise<ApiResponse> {
    const { problemName } = ProblemDto;
    const problem = await this.problemRepository.save({
      problemName,
    });
    return {
      statusCode: 200,
      message: 'Problem created successfully',
      data: problem,
    };
  }

  /**
   * [updateProblem ]
   *
   * @return  {[type]}  [return ]
   */
  async updateProblem(
    ProblemDto: ProblemDto,
    id: string,
  ): Promise<ApiResponse> {
    // check category is exist
    const problem = await this.problemRepository.save({
      id: id,
      ...ProblemDto,
    });
    return {
      statusCode: 200,
      message: 'Problem updated successfully',
      data: problem,
    };
  }

  /**
   * [deleteProblemById ]
   *
   * @param   {string<ApiResponse>}   id  [id ]
   *
   * @return  {Promise<ApiResponse>}      [return ]
   */
  async deleteProblemById(id: string): Promise<ApiResponse> {
    const problem = await this.problemRepository.delete({
      id: id,
    });

    if (problem?.affected < 1) throw new NotFoundException('Problem Not Found');

    return {
      statusCode: 200,
      message: 'Problem delete successfully',
      data: problem,
    };
  }
}
