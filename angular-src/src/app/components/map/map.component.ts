import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Marker } from '../../interfaces/marker';
import { Store } from '../../interfaces/store';
import { Router } from '@angular/router';
import { GoogleMapsAPIWrapper, MarkerManager } from 'angular2-google-maps/core/services';

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
  zoom: number = 4;

  constructor(private backendService: BackendService, private gmapsApi: GoogleMapsAPIWrapper, private markerManager: MarkerManager) { }

  ngOnInit() {
    this.backendService.getAllStores().subscribe(stores => {
      this.allStores = stores;
    });
  }


}
