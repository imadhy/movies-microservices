import { Injectable } from '@nestjs/common';
import { CommentDTO, MessageDTO } from '@movie-ms/dto';
import { v4 as uuid } from 'uuid';
import { CommentInput } from './inputs/comment.input';

@Injectable()
export class CommentService {
  private readonly comments: CommentDTO[];

  constructor() {
    this.comments = [];
  }

  async findAll(): Promise<CommentDTO[]> {
    return this.comments;
  }

  async create(comment: CommentInput): Promise<MessageDTO> {
    this.comments.push({
      id: uuid(),
      prop1:comment.prop1,
      prop2:comment.prop2
    });
    return {
      message: 'Your account is successfully created.',
      type: 'Info',
      status: 201
    };
  }

  async findOneById(id: string): Promise<CommentDTO | undefined> {
    return this.comments.find(comment => comment.id === id);
  }

  async update(id: string, data: CommentDTO) {
    let comment = this.comments.find(comment => comment.id === id);
    return; // Update
  }

  async delete(id: string): Promise<MessageDTO> {
    this.comments.splice(this.comments.findIndex(comment => comment.id === id), 1);
    return {
      message: 'Your account is successfully deleted.',
      type: 'Info',
      status: 200
    };
  }
}
