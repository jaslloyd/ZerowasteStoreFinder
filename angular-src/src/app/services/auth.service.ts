import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  validateNewStore(store, products){
      if (store == undefined || products == undefined || products == ""){
        return false;
      }
      return true;
  }
}
