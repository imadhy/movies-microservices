import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from '../interfaces';

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

  @Mutation()
  async createCategory(@Args('category') category) {
    return await this.categoryService.createCategory(category);
  }

  @Mutation()
  async updateCategory(@Args('id') id: string, @Args('category') category) {
    return await this.categoryService.updateCategory(id, category);
  }

  @Mutation()
  async deleteCategory(@Args('id') id: string) {
    return await this.categoryService.deleteCategory(id);
  }
}
