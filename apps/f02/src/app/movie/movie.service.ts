import { Injectable } from '@nestjs/common';
import { MovieEntity } from '../../../../../libs/dto/src/lib/d02/movie.entity';
import { MovieService as MService } from 'apps/d02/src/app/movie/movie.service';

@Injectable()
export class MovieService {
  private readonly movieService: MService;

  // Retrieve Movie By Id
  getMovieById(id: string) {
    return this.movieService.show(id);
  }

  // Retrieve All Movies
  getAllMovies() {
    return this.movieService.showAll();
  }

  // Create Movie
  createMovie(movie: MovieEntity) {
    return this.movieService.create(movie);
  }

  // Update Movie By Id
  updateMovieById(id: string, data: Partial<MovieEntity>) {
    return this.movieService.update(id, data);
  }

  // Delete Movie By Id
  deleteMovieById(id: string) {
    return this.movieService.destroy(id);
  }
}
