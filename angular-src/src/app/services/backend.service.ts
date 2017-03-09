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
    //return this.http.post('api/stores/', query, {headers: headers})
    //return this.http.get('api/stores/' + query, {headers: headers})
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {headers: headers})
      .map(res => res.json());
  }

  addStore(store){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('api/addstore/', store, {headers: headers})
      .map(res => res.json());
  }

  getStore(storeID){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('api/store/'+storeID, {headers: headers})
      .map(res => res.json());
  }
}
