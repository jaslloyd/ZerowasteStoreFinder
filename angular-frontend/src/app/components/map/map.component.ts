import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Marker } from '../../interfaces/marker';
import { Store } from '../../interfaces/store';
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
  usersLocation: string = ''; // shoyld be passed via sote-finder router link or reverse heocache.//
  geoposition = ''; // shoyld be passed via sote-finder router link
  query: string = '';

  constructor(private activatedRoute: ActivatedRoute, private backendService: BackendService,  private loader: MapsAPILoader) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.lat = parseFloat(params.lat) || 52;
      this.lng = parseFloat(params.lng) || 13;
    })
  }

  onUserInput(stores: Store[]) : void {
    this.allStores = stores;
  }

  listStores(){
    this.backendService.searchStores(this.query, '').subscribe(stores => this.allStores = stores)
  }

}
