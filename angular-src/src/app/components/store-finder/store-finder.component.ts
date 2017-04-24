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
  query: String = '';
  stores: Store[] = [];
  lat: number = 52;
  lng: number = 13;
  zoom: number = 3;
  showStoresOnMap: boolean = false;
  btnText = "View all stores on map";
  noResults: boolean = false;

  dayIndex: number;
  constructor(private backendService: BackendService) { }

  ngOnInit() {
    const now = new Date();
    this.dayIndex = now.getDay() - 1;
    if(navigator && navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 10;
      });
    }
  }

  searchStores(){
    if (this.query.length > 0){
      this.backendService.searchStores(this.query).subscribe(stores => {
        if(stores.length > 0){
          this.stores = stores;
          this.noResults = false;
        }else{
          this.stores = [];
          this.noResults = true;
        }
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
