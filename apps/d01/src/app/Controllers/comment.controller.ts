import { Controller, Get, Delete, Param, Put, Body } from '@nestjs/common';
import { CommentService } from '../Services/comment.service';
import { Comment } from '../../../../../libs/dto/src/lib/d01/comment.entity';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Put('put/:id')
  async update(@Param('id') id, @Body() commentData): Promise<any> {
    return this.commentService.putByID(id, commentData);
  }
  @Get('get/:id')
  getOne(@Param('id') id) {
    return this.commentService.findByID(id);
  }

  @Delete('delete/:id')
  async deleteOne(@Param('id') id) {
    return await this.commentService.deleteByID(id);
  }
}
