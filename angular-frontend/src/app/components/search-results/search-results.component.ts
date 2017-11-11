import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '../../interfaces/store';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  query: string;
  stores: Store[] = [];
  noResults: boolean = false;
  lat: number = 52;
  lng: number = 13;
  zoom: number = 4;
  dayIndex: number;

  constructor(private activatedRoute: ActivatedRoute, private backendService: BackendService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.query = params['query'];
      const todayIndex = new Date().getDay() - 1;
      this.dayIndex = todayIndex === -1 ? 6 : todayIndex;
    })
  }

  onUserInput(stores: Store[]) : void {
    this.noResults = stores.length === 0 ? true : false;
    this.stores = stores;
  }
}
