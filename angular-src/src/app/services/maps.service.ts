import { Injectable } from '@angular/core';

@Injectable()
export class MapsService {

  constructor() { }

  /*
    Add store
      (Store name, address, website, what they sell for zero waste)
      Store is added through component (AddStore) which will have a form
      Maps service needs to take the address they give us and turn it into coordinates
      or
      Instead of a form we display a map, they search for the store theya are looking for
      once they find it, have them click a button(This store) which then displays the form
      This means we will have all the necessary google maps information...we just add it to the database

    Plot stores
      Get the stores from the backend (take location of user to filter down results)...might cause issues
      For each store, plot the points on a map with a custom logo (Z) and a few more details
      or
      User types location(or get location via browser) they click search shows all stores in that location.

    Admin
      Remove store
      Delete store

  */

}
