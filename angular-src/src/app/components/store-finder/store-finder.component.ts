import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {MapsService} from '../../services/maps.service';
import {BackendService} from '../../services/backend.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { Marker } from '../../interfaces/marker';
import { Store } from '../../interfaces/store';

@Component({
  selector: 'app-store-finder',
  templateUrl: './store-finder.component.html',
  styleUrls: ['./store-finder.component.css']
})
export class StoreFinderComponent implements OnInit {
  query: String;
  stores: Store[] = [];
  allMarkers: Marker[] = [];
  allStores: Store[] = [];
  lat: number;
  lng: number;
  zoom: number = 10;
  showStoresOnMap: boolean = false;
  btnText = "View stores on map";

  constructor(private mapsService: MapsService, private backendService: BackendService) { }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
    this.backendService.getAllStores().subscribe(stores => {
      this.allStores = stores.stores;
      this.allStores.forEach((store) => {
        this.allMarkers.push({
          lat: store.lat,
          lng: store.lng,
          label: store.name,
          draggable: false,
          link: store.id
        });
      });
    });
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
    this.btnText = this.showStoresOnMap ? 'Hide Map' : 'View stores on map';
  }


}
