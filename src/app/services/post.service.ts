import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observablethrow';


@Injectable()
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

getPosts() {
  return this.http.get(this.url);
}

// createPost(post) {
//   return this.http.post(this.url, JSON.stringify(post))
//        .catch((error: Response) => {

//          if (error.status === 400)

// return Observable.throw

//        });
// }
//  }
// pass an application specific error object
//this 400, bad request is a common type of error
createPost(post) {
  return this.http.post(this.url, JSON.stringify(post));
  .catch((error: Response) => {
    if(error.status === 400)
     return Observable.throw(new BadInput(error.json()));
     return Observable.throw(new AppError(error.json()));
  });
}
updatePost(post) {
  return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
}
deletePost(id) {
   return this.http.delete(this.url + '/' + id)
   .catch((error: Response) => {
     if ( error.status === 404)
     Observable.throw
     return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
   });
}
}