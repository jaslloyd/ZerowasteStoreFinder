import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { MapComponent } from '../map/map.component';
import { GoogleMapsAPIWrapper, MarkerManager } from '@agm/core/services';
import { AgmMarkerCluster } from '@agm/js-marker-clusterer';
import { BackendService } from '../../services/backend.service';

declare var google: any;
@Component({
  selector: 'app-store-finder',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class StoreFinderComponent implements OnInit {
  gmapsOptions: Object = {}
  query: string = '';
  searchLocal: string = '';
  navigatorPosition = { lat: 52, lng: 13 };

 
  constructor(private backendService: BackendService, private loader: MapsAPILoader,
    private _zone: NgZone) { }

  ngOnInit() {
      this.autocomplete();
  }

  getLocation() {
    if(navigator && navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.navigatorPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.getGeolocation();
      });
    }
  }

  getGeolocation(){
    this.loader.load().then(() => {
      const geocoder = new google.maps.Geocoder;
      geocoder.geocode({'location': this.navigatorPosition}, (results, status) => {
        if(status === 'OK'){
          if (results[0]){
            // console.log(results)
            const cityName = results[0].address_components.filter(result => result.types.includes('locality'))

            this._zone.run(() => {
              this.searchLocal = cityName[0].long_name
              console.log(this.searchLocal);
            })
          } 
        }
        
      })
    })
  }

  autocomplete(){
    this.loader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(document.getElementById("searchLocal"), this.gmapsOptions);
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
          this._zone.run(() => {
            let place = autocomplete.getPlace();
            this.searchLocal = place.formatted_address;
          });
      });
    });
  }
}
