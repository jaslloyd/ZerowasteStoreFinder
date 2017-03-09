import { Component, OnInit, NgZone } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
declare var google: any;
@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  lat: number;
  lng: number;
  marker: marker;
  zoom: number = 8;
  place: any;
  store: store;
  products: string;

  constructor(private loader: MapsAPILoader,
   private _zone: NgZone) { }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
    this.marker = {
      lat: this.lat,
      lng: this.lng,
      label: "My location",
      draggable: true
    }
    this.autocomplete();
  }

  autocomplete(){
    this.loader.load().then(() => {
      var autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocompleteInput"), {});
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
          this._zone.run(() => {
            var place = autocomplete.getPlace();

            this.marker = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              label: place.name,
              draggable: true
            };

            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            // Make this zoom better
            this.zoom = 17;
            this.place = place;
          });
      });
    });
  }

  onAddStoreSubmit(){
    console.log(this.place);
    // Need to do verification on if all these parameters are specified
    this.store = {
      name: this.place.name,
      address: this.place.formatted_address,
      openingHours: this.place.opening_hours.weekday_text,
      products: this.products,
      lat: this.lat,
      lng: this.lng
    };
    console.log(this.store);
  }
}

interface marker{
  lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

interface store{
  name: string;
  address: string;
  openingHours: string;
  products: string;
  lat: number;
  lng: number;
}
