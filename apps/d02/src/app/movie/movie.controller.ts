import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieEntity } from '@movie-ms/dto';

@Controller('movie')
export class MovieController {
  constructor(private MovieService: MovieService) {}

  @Get()
  showAllOrder() {
    return this.MovieService.showAll();
  }

  @Post()
  createOrder(@Body() data) {
    console.log(data);
    let categoriesId = JSON.parse(data['categories']);
    return this.MovieService.create(data as MovieEntity, categoriesId['ids']);
  }

  @Get(':id')
  showOrder(@Param('id') id: string) {
    return this.MovieService.show(id);
  }
  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() data) {
    let categoriesId = JSON.parse(data['categories']);
    delete data['categories'];
    return this.MovieService.update(id, data, categoriesId['ids']);
  }

  @Delete(':id')
  destroyOrder(@Param('id') id: string) {
    return this.MovieService.destroy(id);
  }
}
