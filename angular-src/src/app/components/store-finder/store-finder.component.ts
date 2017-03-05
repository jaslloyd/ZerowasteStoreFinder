import { Component, OnInit } from '@angular/core';
import {MapsService} from '../../services/maps.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-store-finder',
  templateUrl: './store-finder.component.html',
  styleUrls: ['./store-finder.component.css']
})
export class StoreFinderComponent implements OnInit {

  constructor(private mapsService: MapsService) { }

  ngOnInit() {
  }

}
