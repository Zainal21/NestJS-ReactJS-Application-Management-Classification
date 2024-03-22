import { Injectable } from '@nestjs/common';
import { ApiResponse } from './shared/utils/api-response.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  healthyCheck(): ApiResponse {
    return {
      statusCode: 200,
      message: 'Application is up',
    };
  }
}
