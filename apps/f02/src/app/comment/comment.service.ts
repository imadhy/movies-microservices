import { Injectable } from '@nestjs/common';

export type Comment = any;

@Injectable()
export class CommentService {
    private readonly comments: Comment[];

    //Static Movies
    constructor() {
        this.comments = [
        {
            id: "9f429dc7-b8c2-474b-be34-3e2fd660c71d",
            user_id: 1,
            media_id: 1,
            created_at: Date(),
            updated_at: Date(),
            rating: 5,
            comment: "Point faible: Trop fort",
        },
        {
            id: "9f429dc7-b8c2-474b-be34-3e2fd660c71d",
            user_id: 2,
            media_id: 1,
            created_at: Date(),
            updated_at: Date(),
            rating: 3,
            comment: "Bien mais pas top",
        },
        {
            id: "9f429dc7-b8c2-474b-be34-3e2fd660c71d",
            user_id: 1,
            media_id: 2,
            created_at: Date(),
            updated_at: Date(),
            rating: 4,
            comment: "J'ai bien aimé",
        }
        ];
    }

    // Retrieve Comments By Movie
    async getCommentsByMovie(id: number): Promise<Comment[] | undefined> {
        return this.comments.filter(comment => comment.media_id == id);
    }

    // Retrieve Comments By Movie
    async getCommentText(comment_id: string): Promise<string | undefined> {
        return this.comments.find(comment => comment.id == comment_id).comment;
    }
}
