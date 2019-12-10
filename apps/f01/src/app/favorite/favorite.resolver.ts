import {
  Resolver,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { FavoriteService } from './favorite.service';
import { MessageDTO, FavoriteDTO } from '@movie-ms/dto';

@Resolver('Favorite')
export class FavoriteResolver {
  constructor(private readonly favoriteService: FavoriteService) {}

  // @Mutation(() => MessageDTO) // Create Favorite
  // async signup(@Args('input') input: FavoriteDTO) {
  //   return this.favoriteService.create(input);
  // }

  @Query(() => [FavoriteDTO]) // Find all favorite
  async favorites() {
    return this.favoriteService.findAll();
  }

  @Query(() => FavoriteDTO) // Find one favorite by id
  async findFavorite(@Args('id') id: string) {
    return await this.favoriteService.findOneById(id);
  }

  // @Mutation(() => FavoriteDTO)
  // async updateFavorite(@Args('id') id: string, body: UpdateFavoriteDto) {
  //     return this.favoriteService.update(id, body);
  // }

  @Query(() => MessageDTO) // Delete favorite by id
  async deleteFavorite(@Args('id') id: string) {
    return this.favoriteService.delete(id);
  }
}
