import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '../../interfaces/store';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit {

  stores: Store[] = [];
  results = true;
  query: string;
  location: string;
  lat: number;
  lng: number;
  zoom: number = 3;
  dayIndex: number;
  navigatorPosition: object;

  constructor(private activatedRoute: ActivatedRoute, private backendService: BackendService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.query = params['query']
      this.location = params['location'];
      this.navigatorPosition = {
        lat: params.lat,
        lng: params.lng
      }
      const todayIndex = new Date().getDay() - 1;
      this.dayIndex = todayIndex === -1 ? 6 : todayIndex;
    })
  }

  onUserInput(stores: Store[]) : void {
    this.stores = stores;
    this.results = stores.length > 0 ? true : false;
  }

  onQueryChange(query: string) : void {
    this.query = query
  }
}
