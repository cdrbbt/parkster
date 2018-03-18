import { HttpClient } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  APIurl = 'http://media.mw.metropolia.fi/wbma/';

  login(username: string, password: string){
    return this.http.post((this.APIurl + 'login/'),{'username': username, 'password': password});
  }

  register(username: string, password: string, email: string){
    return this.http.post((this.APIurl + 'users/'),{'username': username, 'password': password, 'email': email})
  }

  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');
  }

}
