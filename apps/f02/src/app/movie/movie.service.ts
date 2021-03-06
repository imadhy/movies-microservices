import { Injectable } from '@nestjs/common';
import { MovieEntity } from '../../../../../libs/dto/src/lib/d02/movie.entity';
import fetch from 'node-fetch';

@Injectable()
export class MovieService {
  private url: string = 'http://localhost:3333/api/movie/';
  // Retrieve Movie By Id
  async getMovieById(id: string): Promise<MovieEntity> {
    let res = await fetch(this.url + id);
    return res.json();
  }

  // Retrieve All Movies
  async getAllMovies(): Promise<MovieEntity[]> {
    let res = await fetch(this.url);
    return res.json();
  }

  // Create Movie
  async createMovie(movie: MovieEntity): Promise<MovieEntity> {
    let res = await fetch(this.url, {
      method: 'post',
      body: JSON.stringify(movie),
      headers: { 'Content-Type': 'application/json' }
    });
    return res.json();
  }

  // Update Movie
  async updateMovie(id: string, movie: MovieEntity): Promise<MovieEntity> {
    let res = await fetch(this.url + id, {
      method: 'put',
      body: JSON.stringify(movie),
      headers: { 'Content-Type': 'application/json' }
    });
    return await res.json();
  }

  // Delete Movie
  async deleteMovie(id: string) {
    let res = await fetch(this.url + id, {
      method: 'delete'
    });
    return res.json();
  }
}
