import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): { status: string; statusCode: number } {
    return {
      status: 'Ok',
      statusCode: HttpStatus.OK,
    };
  }
}
