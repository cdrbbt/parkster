import { HttpClient } from '@angular/common/http';
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
    return this.http.get((this.APIurl + 'media?start=' + start + '&limit='+ limit));
  }

  fetchComments(id:number) {
    return this.http.get((this.APIurl + 'comments/file/' + id));
  }

  constructor(public http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }

}
