import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comment, Message } from '@movie-ms/dto';
import { CommentInput } from './inputs/comment.input';

@Resolver('Comment')
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => Message) // Create Comment
  async addComment(@Args('input') body: CommentInput) {
    return await this.commentService.create(body);
  }

  @Query(() => [Comment]) // Find all comment in database
  async comments() {
    return await this.commentService.findAll();
  }

  @Query(() => Comment) // Find one Comment by id
  async findComment(@Args('id') id: string) {
    return await this.commentService.findOneById(id);
  }

  // @Mutation(() => Comment)
  // async updateComment(@Args('id') id: string, body: UpdateComment) {
  //     return this.commentService.update(id, body);
  // }

  @Query(() => Message) // Delete comment by id
  async deleteComment(@Args('id') id: string) {
    return await this.commentService.delete(id);
  }
}
