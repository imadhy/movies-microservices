import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../../../../../libs/dto/src/lib/d02/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private CategoryRepository: Repository<CategoryEntity>
  ) {}

  async showAll() {
    return await this.CategoryRepository.find();
  }

  async create(data: CategoryEntity) {
    const order = await this.CategoryRepository.create(data);
    await this.CategoryRepository.save(order);
    return order;
  }

  async show(id: string) {
    return await this.CategoryRepository.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<CategoryEntity>) {
    return await this.CategoryRepository.update({ id }, data);
  }

  async destroy(id: string) {
    await this.CategoryRepository.delete({ id });
    return { delete: true };
  }
}