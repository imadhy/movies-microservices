import { Resolver, Query, Args } from '@nestjs/graphql';
import { CategoryService } from './category.service';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query()
  async category(@Args('id') id: string) {
    return await this.categoryService.getCategoryById(id);
  }

  @Query()
  async categories() {
    return await this.categoryService.getAllCategories();
  }
}
