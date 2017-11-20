import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Marker } from '../../interfaces/marker';
import { Store } from '../../interfaces/store';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
// import { GoogleMapsAPIWrapper, MarkerManager } from '@agm/core/services';
// import { AgmMarkerCluster } from '@agm/js-marker-clusterer';

declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
//https://developers.google.com/maps/documentation/javascript/marker-clustering
export class MapComponent implements OnInit {
  allStores: Store[] = [];
  lat: number = 52;
  lng: number = 13;
  zoom: number = 6;
  usersLocation: string = 'dublin' // shoyld be passed via parent
  geoposition = '' // should be passed via parent...

  constructor(private backendService: BackendService,  private loader: MapsAPILoader) { }

  ngOnInit() {
    if(navigator && navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }
    // this.backendService.getAllStores().subscribe(stores => {
    //   this.allStores = stores;
    // });
  }

  onUserInput(stores: Store[]) : void {
    this.allStores = stores;
  }

}
