import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDTO } from '@movie-ms/dto';

@Controller('movie')
export class MovieController {
    constructor(private MovieService: MovieService) { }

    @Get()
    showAllOrder() {
        return this.MovieService.showAll();
    }

    @Post()
    createOrder(@Body() data: MovieDTO) {
        return this.MovieService.create(data);
    }

    @Get(':id')
    showOrder(@Param('id') id: string) {
        return this.MovieService.show(id);
    }

    @Put(':id')
    updateOrder(@Param('id') id: string, @Body() data: Partial<MovieDTO>) {
        return this.MovieService.update(id, data);

    }

    @Delete(':id')
    destroyOrder(@Param('id') id: string) {
        return this.MovieService.destroy(id);
    }
}
