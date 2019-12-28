import {
  Resolver,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { FavoriteService } from './favorite.service';
import { FavoriteInput } from './inputs/favorite.input';
import { DbUserInput } from './inputs/dbuser.input';
import { Favorites } from '@movie-ms/dto';

@Resolver('Favorite')
export class FavoriteResolver {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Mutation(() => Favorites) // Create Favorite
  async addFavorite(@Args('input') input: FavoriteInput) {
    return this.favoriteService.addFavorite(input);
  }

  @Query(() => [Favorites]) // Find all favorites by user
  async getFavoriteByUserId(@Args('input') user: DbUserInput) {
    return this.favoriteService.getFavoriteByUserId(user.id);
  }

  @Mutation(() => Boolean) // Delete favorite
  async deleteFavorite(@Args('input') input: FavoriteInput) {
    return this.favoriteService.deleteFavorite(input);
  }
}
