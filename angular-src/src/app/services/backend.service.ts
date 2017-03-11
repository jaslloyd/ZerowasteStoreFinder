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
    return this.http.get('http://localhost:3000/api/stores/search/' + query, {headers: headers})
      .map(res => res.json());
  }

  addStore(store){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/stores/addStore', store, {headers: headers})
      .map(res => res.json());
  }

  getStore(storeID){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/api/stores/'+storeID, {headers: headers})
      .map(res => res.json());
  }
}
