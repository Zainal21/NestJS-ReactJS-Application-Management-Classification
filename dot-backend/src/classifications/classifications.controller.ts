import { ClassificationDto } from './classifications.dto';
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
import { ClassificationsService } from './classifications.service';
import { AuthGuard } from 'src/shared/security/auth.guard';

@UseGuards(AuthGuard)
@Controller('classifications')
export class ClassificationsController {
  constructor(
    private readonly classificationsService: ClassificationsService,
  ) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  async findClassification() {
    return this.classificationsService.findClassification();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findClassificationById(@Query() id: string) {
    return this.classificationsService.findClassificationById(id);
  }

  @Post('')
  @HttpCode(HttpStatus.OK)
  async createClassification(@Body() createClassification: ClassificationDto) {
    return this.classificationsService.createClasification(
      createClassification,
    );
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async uploadClassification(
    @Param('id') id: string,
    @Body() ClassificationDto: ClassificationDto,
  ) {
    return this.classificationsService.updateClassification(
      id,
      ClassificationDto,
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteClassification(@Param('id') id) {
    return this.classificationsService.deleteClassification(id);
  }
}
