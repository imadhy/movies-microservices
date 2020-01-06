import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { Favorite } from '../../../../../libs/dto/src/lib/d01/favorite.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorite)
    private readonly favoriteRepo: Repository<Favorite>
  ) {}

  async findByID(id) {
    return this.favoriteRepo.query('SELECT * FROM favorites where "id" = $1', [
      id
    ]);
  }

  async deleteById(id) {
    await this.favoriteRepo.query('DELETE FROM favorites WHERE id = $1', [id]);
  }

  async insert(favorite: Favorite) {
    return getConnection()
      .createQueryBuilder()
      .insert()
      .into(Favorite)
      .values(favorite)
      .execute();
  }
}
