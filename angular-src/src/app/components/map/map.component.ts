import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Marker } from '../../interfaces/marker';
import { Store } from '../../interfaces/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  allMarkers: Marker[] = [];
  allStores: Store[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getAllStores().subscribe(stores => {
      this.allStores = stores.stores;
      this.allStores.forEach((store) => {
        this.allMarkers.push({
          lat: store.lat,
          lng: store.lng,
          label: store.name,
          draggable: false,
          link: store.id
        });
      });
    });
  }

}
