import { Injectable } from '@nestjs/common';
import { MessageDTO } from '@movie-ms/dto';

@Injectable()
export class AppService {
  getData(): MessageDTO {
    return { message: 'API Facade #01', type: 'Info', status: 200 };
  }
}
