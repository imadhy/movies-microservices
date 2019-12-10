import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { PersonService } from './person.service';
import { MovieDTO } from '@movie-ms/dto';

@Controller('movie')
export class PersonController {
  constructor(private PersonService: PersonService) {}

  @Get()
  showAllOrder() {
    return this.PersonService.showAll();
  }

  @Post()
  createOrder(@Body() data: MovieDTO) {
    return this.PersonService.create(data);
  }

  @Get(':id')
  showOrder(@Param('id') id: string) {
    return this.PersonService.show(id);
  }

  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() data: Partial<MovieDTO>) {
    return this.PersonService.update(id, data);
  }

  @Delete(':id')
  destroyOrder(@Param('id') id: string) {
    return this.PersonService.destroy(id);
  }
}
