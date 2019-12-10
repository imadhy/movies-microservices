import {
  Resolver,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { MessageDTO, CommentDTO } from '@movie-ms/dto';
import { CommentInput } from "./inputs/comment.input";
@Resolver('Comment')
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}
  
  @Mutation(() => MessageDTO) // Create Comment / Signup
  async addcomment(@Args('input') body: CommentInput ) {
     return this.commentService.create(body);
   }

  @Query(() => [CommentDTO]) // Find all comment in database
  async comments() {
    return this.commentService.findAll();
  }

  @Query(() => CommentDTO) // Find one Comment by id
  async findComment(@Args('id') id: string) {
    return await this.commentService.findOneById(id);
  }

  // @Mutation(() => CommentDTO)
  // async updateComment(@Args('id') id: string, body: UpdateCommentDto) {
  //     return this.commentService.update(id, body);
  // }

  @Query(() => MessageDTO) // Delete comment by id
  async deleteComment(@Args('id') id: string) {
    return this.commentService.delete(id);
  }
}
