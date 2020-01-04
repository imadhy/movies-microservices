import { Injectable, HttpService } from '@nestjs/common';
import { Comment, Message } from '@movie-ms/dto';
import { v4 as uuid } from 'uuid';
import { CommentInput } from './inputs/comment.input';  
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';


@Injectable()
export class CommentService {
  private readonly userIdNotExist: Function;
  private readonly movieIdNotExist: Function;

  constructor(private readonly http: HttpService) {
    this.userIdNotExist = function (id:string) {
      return this.http.get("http://localhost:3333/api/user/get/all").toPromise()
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          if (element.id === id) {
            return false
          }
        }
        return true
      })
    };
    this.movieIdNotExist = function (id:string) {
      return this.http.get("http://localhost:3333/api/movie").toPromise()
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          if (element.id === id) {
            return false
          }
        }
        return true
      })
    }; 

  }

  async findAll(): Promise<Observable<AxiosResponse<Comment[]>>> {
    return this.http.get("http://localhost:3333/api/comment/get/all").toPromise()
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    })
  }

  async create(comment: CommentInput): Promise<Object> {
    
    if(this.userIdNotExist(comment.userId)&& this.movieIdNotExist(comment.userId)){
      let newComment: Comment = {
        id: uuid(),
        userId: comment.userId,
        movieId: comment.movieId,
        // created_at: comment.created_at,
        comment: comment.comment
        // updated_at: comment.updated_at,
        // rating: comment.rating
      };
      let postOk = this.http.post("http://localhost:3333/api/comment/post",newComment).toPromise()
      .then((res) => {
        return true;
      })
      .catch((err) => {
        return false;
      })
      if (postOk) {
        return  {
          response:newComment,
          message: 'Your comment is successfully add.',
          type: 'Info',
          status: 201
        };  
      }
    }
    return {
        response: null,
        message: 'Your comment is not add.',
        type: 'Error',
        status: 500
      };  
  }

  async findOneById(id: string): Promise<Observable<AxiosResponse<Comment>>> {
    return this.http.get("http://localhost:3333/api/comment/get/"+id).toPromise()
    .then((res) => {
      if (res.data && res.data.length>0) {
        return res.data[0];
      }
      return {}
    })
    .catch((err) => {
      return err;
    })
  }

  async delete(id: string): Promise<Message> {
    return this.http.delete("http://localhost:3333/api/comment/delete/"+id).toPromise()
    .then((res) => {
      return {
        message: 'Your comment is successfully deleted.',
        type: 'Info',
        status: 200
      };
    })
    .catch((err) => {
      return {
        message: "Your comment can't be deleted",
        type: 'Info',
        status: 200
      };
    })
    
    
  
   
  }

  
}
