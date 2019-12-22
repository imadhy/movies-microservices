import { Injectable } from '@nestjs/common';
import { Category } from '../interfaces';

@Injectable()
export class CategoryService {
  private readonly categories: Category[] = [
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
