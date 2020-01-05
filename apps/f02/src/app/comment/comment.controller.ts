import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  Param
} from '@nestjs/common';

import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  // Get Media By Id
  @Get('movie/:id')
  getMovieComments(@Param('id') id: number) {
    return this.commentService.getCommentsByMovie(id);
  }

  // Get Media By Id
  @Get(':comment_id')
  getCommentText(@Param('comment_id') id: number) {
    // return this.commentService.getCommentText(id);
  }
}
