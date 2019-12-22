import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from './comment.service';
import { Comment } from '../../../../../libs/dto/src/lib/d01/comment.entity';
import { CommentController } from '../Controllers/comment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
