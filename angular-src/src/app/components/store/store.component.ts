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
  store = {
    id: "",
    name:  "",
    address:  "",
    products:  "",
    openingHours: ["N/A"],
    lat:  "",
    lng:  ""
  };

  constructor(private loader: MapsAPILoader,
   private _zone: NgZone,
   private backendService: BackendService,
   private flashMessage: FlashMessagesService,
   private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let id = params['id'];
        this.backendService.getStore(id).subscribe(store => {
          this.store = store.store;
          console.log(this.store);
        },
        err => {
          console.log(err);
          return false;
        });
      });


  }

}
