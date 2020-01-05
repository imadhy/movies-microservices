import { Injectable } from '@nestjs/common';
import { Category } from '../interfaces';
import { CategoryEntity } from '../../../../../libs/dto/src/lib/d02/category.entity';
import fetch from 'node-fetch';

@Injectable()
export class CategoryService {
  private url: string = 'http://localhost:3333/api/category/';

  // Retrieve Category By Id
  async getCategoryById(id: string): Promise<Category> {
    let res = await fetch(this.url + id);
    return await res.json();
  }

  // Retrieve All Categories
  async getAllCategories(): Promise<CategoryEntity[]> {
    let res = await fetch(this.url);
    return res.json();
  }

  // Create Category
  async createCategory(category: CategoryEntity): Promise<CategoryEntity> {
    let res = await fetch(this.url, {
      method: 'post',
      body: JSON.stringify(category),
      headers: { 'Content-Type': 'application/json' }
    });
    return res.json();
  }
}
