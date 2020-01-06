import { Module, HttpModule } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';

@Module({
  providers: [CommentService, CommentResolver],
  exports: [CommentService],
  imports:[HttpModule]
})
export class CommentModule {}
