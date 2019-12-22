import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../../../../../libs/dto/src/lib/d01/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>
  ) {}

  async post(commentData) {
    return await this.commentRepo.query(
      'INSERT INTO comments (userId, mediaId, createdAt, updatedAt, rating, text) VALUES ($1, $2, $3, $3, $4, $5)',
      [
        commentData[0],
        commentData[1],
        commentData[2],
        commentData[3],
        commentData[4]
      ]
    );
  }

  async putByID(id, commentData) {
    return await this.commentRepo.query(
      'UPDATE comments SET rating = $1, text = $2 WHERE id = $3',
      [commentData[0], commentData[1], id]
    );
  }
  async deleteByID(id) {
    await this.commentRepo.query('DELETE FROM comments WHERE id = $1', [id]);
  }

  async findByID(id) {
    return this.commentRepo.query(
      'SELECT * FROM comments where  "mediaId" like ' + '$1' + '',
      [id]
    );
  }
}
