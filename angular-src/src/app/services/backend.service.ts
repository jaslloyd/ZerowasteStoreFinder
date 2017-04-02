import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {
  headers: Headers = new Headers();

  constructor(private http:Http) {
    this.headers.append('Content-Type','application/json');
  }

  searchStores(query){
    return this.http.get('http://localhost:3000/api/stores/search/' + query, {headers: this.headers})
      .map(res => res.json());
  }

  addStore(store){
    return this.http.post('http://localhost:3000/api/stores/addStore', store, {headers: this.headers})
      .map(res => res.json());
  }

  editStore(store){
    return this.http.put('http://localhost:3000/api/stores/'+store.id, store, {headers: this.headers})
      .map(res => res.json());
  }

  deleteStore(storeID){
    return this.http.delete('http://localhost:3000/api/stores/'+storeID, {headers: this.headers})
      .map(res => res.json());
  }

  getStore(storeID){
    return this.http.get('http://localhost:3000/api/stores/'+storeID, {headers: this.headers})
      .map(res => res.json());
  }

  getAllStores(){
    return this.http.get('http://localhost:3000/api/stores/all', {headers: this.headers})
      .map(res => res.json());
  }

  getAllMarkers(){
    return this.http.get('http://localhost:3000/api/stores/locations', {headers: this.headers})
      .map(res => res.json())
  }

  getMessages(){
    return this.http.get('http://localhost:3000/message/messages', {headers: this.headers})
      .map(res => res.json());
  }

  addMessage(message){
    return this.http.post('http://localhost:3000/message/addMessage', message, {headers: this.headers})
      .map(res => res.json());
  }

  deleteMessage(messageID){
    return this.http.delete('http://localhost:3000/message/'+messageID, {headers: this.headers})
      .map(res => res.json());
  }
}
