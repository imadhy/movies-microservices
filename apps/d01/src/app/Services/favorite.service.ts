import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite } from '../../../../../libs/dto/src/lib/d01/favorite.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorite)
    private readonly favoriteRepo: Repository<Favorite>
  ) {}

  findByID(id) {
    return this.favoriteRepo.query(
      'SELECT * FROM favorites where "user" = $1', [id]);
    

  }
}
