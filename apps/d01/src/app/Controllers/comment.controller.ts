import { Controller, Get, Delete, Param, Put, Body } from '@nestjs/common';
import { CommentService } from '../Services/comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Put('put/:id')
  async update(@Param('id') id, @Body() commentData): Promise<any> {
    return this.commentService.putByID(id, commentData);
  }
}
