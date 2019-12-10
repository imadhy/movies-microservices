import {
  Resolver,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { FavoriteService } from './favorite.service';
import { FavoriteInput } from './inputs/favorite.input';
import { FavoriteDTO } from '@movie-ms/dto';

@Resolver('Favorite')
export class FavoriteResolver {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Mutation(() => FavoriteDTO) // Create Favorite
  async addFavorite(@Args('input') input: FavoriteInput) {
    return this.favoriteService.addFavorite(input);
  }

  @Query(() => [FavoriteDTO]) // Find all favorites by user id
  async getFavoriteByUserId(@Args('id_user') id_user: string) {
    return this.favoriteService.getFavoriteByUserId(id_user);
  }

  @Mutation(() => Boolean) // Delete favorite
  async deleteFavorite(@Args('input') input: FavoriteInput) {
    return this.favoriteService.deleteFavorite(input);
  }
}
