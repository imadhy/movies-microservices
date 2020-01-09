import { Injectable, HttpService } from '@nestjs/common';
import { Comment, Message } from '@movie-ms/dto';
import { v4 as uuid } from 'uuid';
import { CommentInput } from './inputs/comment.input';  
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';


@Injectable()
export class CommentService {
  private readonly userIdExist: Function;
  private readonly movieIdExist: Function;

  constructor(private readonly http: HttpService) {
    this.userIdExist = function (id:string) {
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
    this.movieIdExist = function (id:string) {
      return this.http.get("http://localhost:3333/api/movie").toPromise()
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          if (element.id === id) {
            return true
          }
        }
        return false
      })
    }; 

  }

  async findAll(): Promise<Observable<AxiosResponse<Comment[]>>> {
    return this.http.get("http://localhost:3333/api/comment/get/all").toPromise()
    .then((res) => {
      return JSON.parse(res.data);
    })
    .catch((err) => {
      return err;
    })
  }

  async create(comment: CommentInput): Promise<Message> {
    // on pourra executer ces fonctions qui teste la presence de ID quand D01 auras un getAll
    //if(this.userIdExist(comment.userId)&& this.movieIdExist(comment.userId)){
      let newComment: object = {
          "user": comment.userId,
          "mediaId": comment.movieId,
          "createdAt":new Date(),
          "updatedAt": new Date(),
          "rating": comment.rating,
          "text": comment.comment
        }
        
      let postOk = this.http.post("http://localhost:3333/api/comment/post",newComment).toPromise()
      .then((res) => {
        console.log(res);
        
        return true;
      })
      .catch((err) => {
        console.log(err);
        
        return false;
      })
      if (postOk) {
        return  {
          message: 'Your comment is successfully add.',
          type: 'Info',
          status: 201
        };  
      }
    //}
    return {
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

  // On ne peut pas executer la fonction car il n'y a pas de get all du coté du domaine 01 


  // async findOneByUserId(id: string): Promise<Observable<AxiosResponse<Comment>>> {
  //   return this.http.get("http://localhost:3333/api/comment/get/all").toPromise()
  //   .then((res) => {
  //    for (let i = 0; i < res.data.length; i++) {
  //      const element = res.data[i];
  //      if (element.userId === id) {
  //       return element
  //     }
  //    }
  //   })
  //   .catch((err) => {
  //     return err;
  //   })
  // }

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
