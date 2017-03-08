import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {

  constructor(private http:Http) { }

  searchStores(query){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log(query);
    // Make request to back-end to get stores
    //return this.http.post('https://jsonplaceholder.typicode.com/posts', query, {headers: headers})
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {headers: headers})
      .map(res => res.json());
  }
}
