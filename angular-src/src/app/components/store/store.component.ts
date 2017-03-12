import { Component, OnInit, NgZone } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  lat: 0;
  lng: 0;
  zoom: number = 15;

  store = {
    id: "",
    name:  "",
    address:  "",
    products:  "",
    openingHours: ["N/A"],
    lat:  "",
    lng:  ""
  };

  marker = {
    lat: 0,
  	lng: 0,
  	label: "Placeholder",
  	draggable: false
  };

  constructor(private loader: MapsAPILoader,
   private _zone: NgZone,
   private backendService: BackendService,
   private flashMessage: FlashMessagesService,
   private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        const id = params['id'];
        this.backendService.getStore(id).subscribe(store => {
          this.store = store.store;
          this.marker = {
            lat: parseFloat(this.store.lat),
            lng: parseFloat(this.store.lng),
            label: this.store.name,
            draggable: false
          };
          console.log(this.marker);
        },
        err => {
          console.log(err);
          return false;
        });
      });
  }
}

interface marker{
  lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
