import { Injectable } from '@nestjs/common';
import { Comment } from '@movie-ms/dto';
import { Message } from '@movie-ms/dto';
import { v4 as uuid } from 'uuid';
import { CommentInput } from './inputs/comment.input';

@Injectable()
export class CommentService {
  private readonly comments: Comment[];

  constructor() {
    this.comments = [];
  }

  async findAll(): Promise<Comment[]> {
    return this.comments;
  }

  async create(comment: CommentInput): Promise<Message> {
    this.comments.push({
      id: uuid(),
      user: comment.user,
      movie: comment.movie,
      created_at: comment.created_at,
      comment: comment.comment,
      updated_at: comment.updated_at,
      rating: comment.rating
    });
    return {
      message: 'Your comment is successfully add.',
      type: 'Info',
      status: 201
    };
  }

  async findOneById(id: string): Promise<Comment | undefined> {
    return this.comments.find(comment => comment.id === id);
  }

  // async update(id: string, data: Comment) {
  //   let comment = this.comments.find(comment => comment.id === id);
  //   return; // Update
  // }

  async delete(id: string): Promise<Message> {
    this.comments.splice(this.comments.findIndex(comment => comment.id === id), 1);
    return {
      message: 'Your account is successfully deleted.',
      type: 'Info',
      status: 200
    };
  }
}
