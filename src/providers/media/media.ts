import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  APIurl = 'http://media.mw.metropolia.fi/wbma/';

  fetchImages(start = 0, limit = 20) {
    return this.http.get((this.APIurl + 'media?start=' + start + '&limit=' + limit));
  }

  fetchComments(id: number) {
    return this.http.get((this.APIurl + 'comments/file/' + id));
  }

  postComment(file_id, comment) {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token': localStorage.getItem('token')
      })
    }

    return this.http.post((this.APIurl + 'comments'), { 'file_id': file_id, 'comment': comment }, httpOptions)
  };

  uploadMedia(formData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token': localStorage.getItem('token')
      })
    }
    return this.http.post((this.APIurl + 'media'),formData, httpOptions)
  }

  constructor(public http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }

  getUser(user_id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token': localStorage.getItem('token')
      })
    }
    return this.http.get((this.APIurl + 'users/'+ user_id), httpOptions)
  };

}
