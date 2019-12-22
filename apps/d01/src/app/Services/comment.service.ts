import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Comment } from '../../../../../libs/dto/src/lib/d01/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>
  ) {}

  async post(commentData: Comment) {
    return getConnection()
      .createQueryBuilder()
      .insert()
      .into(Comment)
      .values(commentData)
      .execute();
  }

  async putByID(id, commentData) {
    return getConnection()
      .createQueryBuilder()
      .update(Comment)
      .set({
        updatedAt: commentData.updatedAt,
        rating: commentData.rating,
        text: commentData.text
      })
      .where('id = :id', { id })
      .execute();
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
