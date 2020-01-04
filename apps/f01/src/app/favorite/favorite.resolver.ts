/* eslint-disable @typescript-eslint/camelcase */

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FavoriteService } from './favorite.service';
import { FavoriteInput } from './inputs/favorite.input';
import { FavoritesAlt, Message } from '@movie-ms/dto';

@Resolver('Favorite')
export class FavoriteResolver {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Mutation(() => Message) // Add Favorite
  async addFavorite(@Args('input') input: FavoriteInput) {
    return await this.favoriteService.addFavorite(input);
  }

  @Query(() => [FavoritesAlt]) // Find all favorites by user id
  async getFavoriteByUserId(@Args('user_id') user_id: string) {
    return await this.favoriteService.getFavoriteByUserId(user_id);
  }

  @Mutation(() => Message) // Delete favorite
  async deleteFavorite(@Args('input') input: FavoriteInput) {
    return await this.favoriteService.deleteFavorite(input);
  }
}
