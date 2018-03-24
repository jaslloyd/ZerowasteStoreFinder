import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Marker } from '../../interfaces/marker';
import { Store } from '../../interfaces/store';
import { MapsAPILoader } from '@agm/core';

declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
//https://developers.google.com/maps/documentation/javascript/marker-clustering
export class MapComponent implements OnInit {
  allStores: Store[] = [];
  lat: number;
  lng: number;
  zoom: number = 5;
  usersLocation: string = '';
  geoposition = ''; // should be passed via sote-finder router link
  query: string;
  navigatorPosition = {}

  constructor(private activatedRoute: ActivatedRoute, private backendService: BackendService,  private loader: MapsAPILoader) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.lat = parseFloat(params.lat);
      this.lng = parseFloat(params.lng);
      this.query = params.query || '';
      this.usersLocation = params.location || '';
      this.listStores()
    })
  }

  onUserInput(stores: Store[]) : void {
    this.allStores = stores;
  }

  listStores(){
    this.backendService.searchStores(this.query, this.usersLocation).subscribe(stores => this.allStores = stores)
  }

}
