import { Injectable } from '@nestjs/common';
import { FavoriteDTO, MessageDTO } from '@movie-ms/dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FavoriteService {
  private readonly favorites: FavoriteDTO[];

  constructor() {
    this.favorites = [
    ];
  }

  async findAll(): Promise<FavoriteDTO[]> {
    return this.favorites;
  }

  async create(favorite: FavoriteDTO): Promise<MessageDTO> {
    this.favorites.push({
      id: uuid()
    });
    return {
      message: 'Your account is successfully created.',
      type: 'Info',
      status: 201
    };
  }

  async findOneById(id: string): Promise<FavoriteDTO | undefined> {
    return this.favorites.find(favorite => favorite.id === id);
  }

  async update(id: string, data: FavoriteDTO) {
    let favorite = this.favorites.find(favorite => favorite.id === id);
    return; // Update
  }

  async delete(id: string): Promise<MessageDTO> {
    this.favorites.splice(this.favorites.findIndex(favorite => favorite.id === id), 1);
    return {
      message: 'Your account is successfully deleted.',
      type: 'Info',
      status: 200
    };
  }
}
