import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {MapsService} from '../../services/maps.service';
import {BackendService} from '../../services/backend.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-store-finder',
  templateUrl: './store-finder.component.html',
  styleUrls: ['./store-finder.component.css']
})
export class StoreFinderComponent implements OnInit {
  query: String;
  stores: any;//Store[];
  constructor(private mapsService: MapsService, private backEndService: BackendService) { }

  ngOnInit() {
    
  }

  searchStores(){
    console.log(this.query);
    this.backEndService.searchStores(this.query).subscribe(stores => {
      this.stores = stores;
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
