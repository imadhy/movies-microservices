import { Injectable } from '@nestjs/common';
import { Category } from '../interfaces';
import { CategoryEntity } from '../../../../../libs/dto/src/lib/d02/category.entity';

@Injectable()
export class CategoryService {
  private readonly categories: CategoryEntity[] = [
    {
      id: '1',
      name: 'Crime'
    },
    {
      id: '2',
      name: 'Science Fiction'
    }
  ];

  // Retrieve Person By Id
  getCategoryById(id: string): Category {
    return this.categories.find(category => category.id === id);
  }

  // Retrieve All Persons
  getAllCategories(): Category[] {
    return this.categories;
  }
}
