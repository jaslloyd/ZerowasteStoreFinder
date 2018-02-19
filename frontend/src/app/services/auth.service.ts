import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import { tokenNotExpired } from 'angular2-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  serverHostname = environment.apiUrl;

  constructor(private http:Http) { }

  login(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.serverHostname +'/admin/login', user, {headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('token', token);
    //Local storage can only store strings not objects
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  isLoggedIn(){
    return tokenNotExpired();
  }
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
