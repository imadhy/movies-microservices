import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { CommentService } from '../Services/comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('post')
  async post(@Body() commentData): Promise<any> {
    return this.commentService.post(commentData);
  }

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
