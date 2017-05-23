import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BackendService } from '../../services/backend.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Marker } from '../../interfaces/marker';
import { Store } from '../../interfaces/store';
import { MapComponent } from '../map/map.component';
import { GoogleMapsAPIWrapper, MarkerManager } from 'angular2-google-maps/core/services';

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
  zoom: number = 4;
  showStoresOnMap: boolean = false;
  btnText = "View all stores on map";
  noResults: boolean = false;

  dayIndex: number;
  allStores: Store[] = [];
  constructor(private backendService: BackendService) { }

  ngOnInit() {
    const now = new Date();
    this.dayIndex = now.getDay() - 1;
    if (this.dayIndex == -1){
      this.dayIndex = 6;
    }
    this.backendService.getAllStores().subscribe(stores => {
      this.allStores = stores;
    });
    if(navigator && navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 11;
      });
    }
  }

  searchStores(){
    if (this.query.trim().length > 0){
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
