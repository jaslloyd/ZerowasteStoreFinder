import { Component, OnInit, Input } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

import { Store } from '../../interfaces/store';
import { Marker } from '../../interfaces/marker';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input() store: Store;
  @Input() dayIndex: number;

  showMoreInfo: boolean = false;
  zoom: number = 15;
  marker: Marker;
  
  constructor(private loader: MapsAPILoader) { }

  ngOnInit() {
    this.marker = {
      lat: this.store.lat,
      lng: this.store.lng,
      label: this.store.name,
      draggable: false
    }
  }

}
