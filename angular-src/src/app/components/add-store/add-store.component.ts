import { Component, OnInit, NgZone } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { BackendService } from '../../services/backend.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Marker } from '../../interfaces/marker';
import { Store } from '../../interfaces/store';
import { MapComponent } from '../map/map.component';

declare var google: any;
@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number = 8;

  place: any;
  marker: Marker;
  store: Store;
  products: string;

  constructor(private loader: MapsAPILoader,
   private _zone: NgZone,
   private flashMessage: FlashMessagesService,
   private backendService: BackendService,
   private authService: AuthService,
   private router: Router) { }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
    this.autocomplete();
  }

  autocomplete(){
    this.loader.load().then(() => {
      var autocomplete = new google.maps.places.Autocomplete(document.getElementById("storeLocationInput"), {});
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
          this._zone.run(() => {
            var place = autocomplete.getPlace();

            this.marker = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              label: place.name,
              draggable: false
            };

            this.lat = this.marker.lat;
            this.lng = this.marker.lng;
            // Make this zoom better
            this.zoom = 17;
            this.place = place;
            console.log(this.place.photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500}));
          });
      });
    });
  }

  onAddStoreSubmit(){
    if(!this.authService.validateNewStore(this.place, this.products)){
      this.flashMessage.show('Please fill in all fields', {cssClass:'alert-danger', timeout: 3000});
      return false;
    }

    this.store = {
      id: this.place.id,
      name: this.place.name,
      address: this.place.formatted_address,
      products: this.products,
      openingHours: ["N/A"],
      lat: this.marker.lat,
      lng: this.marker.lng
    };

    if (this.place.hasOwnProperty("opening_hours")){
      this.store.openingHours = this.place.opening_hours.weekday_text;
    }

    console.log(this.store);
    this.backendService.addStore(this.store).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Store added', {cssClass:'alert-success', timeout: 3000});
      }else{
        this.flashMessage.show(data.msg, {cssClass:'alert-danger', timeout: 3000});
      }
      this.router.navigate(['/addstore']);
    });
  }
}
