import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BackendService } from '../../services/backend.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Marker } from '../../interfaces/marker';
import { Store } from '../../interfaces/store';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-store-finder',
  templateUrl: './store-finder.component.html',
  styleUrls: ['./store-finder.component.css']
})
export class StoreFinderComponent implements OnInit {
  query: String;
  stores: Store[] = [];
  lat: number;
  lng: number;
  zoom: number = 10;
  showStoresOnMap: boolean = false;
  btnText = "View all stores on map";

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  searchStores(){
    if (this.query != ""){
      this.backendService.searchStores(this.query).subscribe(stores => {
        //add empty check here
        this.stores = stores.stores;
        console.log(this.stores);
      },
      err => {
        console.log(err);
        return false;
      });
    }
  }

  toggleMap(){
    this.showStoresOnMap = !this.showStoresOnMap;
    this.btnText = this.showStoresOnMap ? 'Hide Map' : 'View all stores on map';
  }
}
