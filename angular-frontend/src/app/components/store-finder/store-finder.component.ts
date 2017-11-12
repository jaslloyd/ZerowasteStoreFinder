import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapComponent } from '../map/map.component';
import { GoogleMapsAPIWrapper, MarkerManager } from '@agm/core/services';
import { AgmMarkerCluster } from '@agm/js-marker-clusterer';

@Component({
  selector: 'app-store-finder',
  templateUrl: './store-finder.component.html',
  styleUrls: ['./store-finder.component.css']
})
export class StoreFinderComponent implements OnInit {
  query: string = ''
  showStoresOnMap: boolean = false;
  btnText = "View all stores on map";
  constructor() { }

  ngOnInit() {
  }

  toggleMap(){
    this.showStoresOnMap = !this.showStoresOnMap;
    this.btnText = this.showStoresOnMap ? 'Hide Map' : 'View all stores on map';
  }
}
