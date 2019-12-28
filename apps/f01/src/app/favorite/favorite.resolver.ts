/* eslint-disable @typescript-eslint/camelcase */

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FavoriteService } from './favorite.service';
import { FavoriteInput } from './inputs/favorite.input';
import { FavoritesAlt } from '@movie-ms/dto';

@Resolver('Favorite')
export class FavoriteResolver {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Mutation(() => FavoritesAlt) // Create Favorite
  async addFavorite(@Args('input') input: FavoriteInput) {
    return this.favoriteService.addFavorite(input);
  }

  @Query(() => [FavoritesAlt]) // Find all favorites by user id
  async getFavoriteByUserId(@Args('user_id') user_id: string) {
    return this.favoriteService.getFavoriteByUserId(user_id);
  }

  @Mutation(() => Boolean) // Delete favorite
  async deleteFavorite(@Args('input') input: FavoriteInput) {
    return this.favoriteService.deleteFavorite(input);
  }
}
