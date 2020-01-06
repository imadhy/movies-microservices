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
    let categoriesId = [];
    let actorsId = [];
    let producersId = [];
    let directorsId = [];

    try {
      categoriesId = data['categories']['ids'];
      delete data['categories'];
    } catch (err) {
      categoriesId = null;
    }
    try {
      producersId = data['producers']['ids'];
      delete data['producers'];
    } catch (err) {
      producersId = null;
    }
    try {
      actorsId = data['actors']['ids'];
      delete data['actors'];
    } catch (err) {
      actorsId = null;
    }
    try {
      directorsId = data['directors']['ids'];
      delete data['directors'];
    } catch (err) {
      directorsId = null;
    }

    return this.MovieService.create(
      data as MovieEntity,
      categoriesId,
      actorsId,
      producersId,
      directorsId
    );
  }

  @Get(':id')
  showOrder(@Param('id') id: string) {
    return this.MovieService.show(id);
  }
  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() data) {
    let categoriesId = [];
    let actorsId = [];
    let producersId = [];
    let directorsId = [];

    try {
      categoriesId = data['categories']['ids'];
      delete data['categories'];
    } catch (err) {
      categoriesId = null;
    }
    try {
      producersId = data['producers']['ids'];
      delete data['producers'];
    } catch (err) {
      producersId = null;
    }
    try {
      actorsId = data['actors']['ids'];
      delete data['actors'];
    } catch (err) {
      actorsId = null;
    }
    try {
      directorsId = data['directors']['ids'];
      delete data['directors'];
    } catch (err) {
      directorsId = null;
    }

    return this.MovieService.update(
      id,
      data,
      categoriesId,
      actorsId,
      producersId,
      directorsId
    );
  }

  @Delete(':id')
  destroyOrder(@Param('id') id: string) {
    return this.MovieService.destroy(id);
  }
}
