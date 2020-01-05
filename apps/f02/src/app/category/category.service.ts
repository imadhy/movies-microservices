import { Injectable } from '@nestjs/common';
import { Category } from '../interfaces';
import { CategoryEntity } from '../../../../../libs/dto/src/lib/d02/category.entity';
import fetch from 'node-fetch';

@Injectable()
export class CategoryService {
  private url: string = 'http://localhost:3333/api/category/';

  // Retrieve Person By Id
  async getCategoryById(id: string): Promise<Category> {
    let res = await fetch(this.url + id);
    return await res.json();
  }

  // Retrieve All Persons
  async getAllCategories(): Promise<CategoryEntity[]> {
    let res = await fetch(this.url);
    return res.json();
  }
}
