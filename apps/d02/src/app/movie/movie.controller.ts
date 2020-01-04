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
    return this.MovieService.create(
      data as MovieEntity,
      data['categories']['ids']
    );
  }

  @Get(':id')
  showOrder(@Param('id') id: string) {
    return this.MovieService.show(id);
  }
  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() data) {
    let categoriesId = [];
    try {
      categoriesId = data['categories']['ids'];
      delete data['categories'];
    } catch (err) {
      categoriesId = null;
    }
    return this.MovieService.update(id, data, categoriesId);
  }

  @Delete(':id')
  destroyOrder(@Param('id') id: string) {
    return this.MovieService.destroy(id);
  }
}
