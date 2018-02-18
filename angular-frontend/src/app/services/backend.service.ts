import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class BackendService {
  headers: Headers = new Headers();
  serverHostname = environment.apiUrl;

  constructor(private http:Http) {
    this.headers.append('Content-Type','application/json');
  }

  searchStores(query, location=''){
    const fullQuery = `query=${query}&location=${location}`;
    return this.http.get(this.serverHostname +'/api/stores/nextsearch?' + fullQuery, {headers: this.headers})
      .map(res => res.json());
  }

  addStore(store){
    return this.http.post(this.serverHostname +'/api/stores/addStore', store, {headers: this.headers})
      .map(res => res.json());
  }

  editStore(store){
    return this.http.put(this.serverHostname +'/api/stores/'+store.id, store, {headers: this.headers})
      .map(res => res.json());
  }

  deleteStore(storeID){
    return this.http.delete(this.serverHostname +'/api/stores/'+storeID, {headers: this.headers})
      .map(res => res.json());
  }

  getStore(storeID){
    return this.http.get(this.serverHostname +'/api/stores/'+storeID, {headers: this.headers})
      .map(res => res.json());
  }

  getAllStores(){
    return this.http.get(this.serverHostname + '/api/stores/all', {headers: this.headers})
      .map(res => res.json());
  }

  getAllMarkers(){
    return this.http.get(this.serverHostname +'/api/stores/locations', {headers: this.headers})
      .map(res => res.json())
  }

  getMessages(){
    return this.http.get(this.serverHostname +'/message/messages', {headers: this.headers})
      .map(res => res.json());
  }

  addMessage(message){
    return this.http.post(this.serverHostname+'/message/addMessage', message, {headers: this.headers})
      .map(res => res.json());
  }

  deleteMessage(messageID){
    return this.http.delete(this.serverHostname+'/message/'+messageID, {headers: this.headers})
      .map(res => res.json());
  }

  getUsersCountryCode(lat, lng){
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng, {})
      .map(res => res.json());
  }
}
