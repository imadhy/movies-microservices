import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryEntity } from '../../../../../libs/dto/src/lib/d02/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}

  @Get()
  showAllOrder() {
    return this.CategoryService.showAll();
  }

  @Post()
  createOrder(@Body() data) {
    return this.CategoryService.create(data);
  }

  @Get(':id')
  showOrder(@Param('id') id: string) {
    return this.CategoryService.show(id);
  }

  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() data: Partial<CategoryEntity>) {
    return this.CategoryService.update(id, data);
  }

  @Delete(':id')
  destroyOrder(@Param('id') id: string) {
    return this.CategoryService.destroy(id);
  }
}
