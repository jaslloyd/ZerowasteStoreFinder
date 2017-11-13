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
  templateUrl: './store-finder.component.html',
  styleUrls: ['./store-finder.component.css']
})
export class StoreFinderComponent implements OnInit {
  gmapsOptions: Object = {}
  query: string = '';
  searchLocal: string = '';
  showStoresOnMap: boolean = false;
  btnText = "View all stores on map";
  constructor(private backendService: BackendService, private loader: MapsAPILoader,
    private _zone: NgZone) { }

  ngOnInit() {
    if(navigator && navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.backendService.getUsersCountryCode(position.coords.latitude, position.coords.longitude).subscribe(json => {
            this.searchLocal = json.results[2].formatted_address
          }
        )
      });
    }

    this.autocomplete()
  }

  autocomplete(){
    this.loader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(document.getElementById("searchLocal"), this.gmapsOptions);
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
          this._zone.run(() => {
            let place = autocomplete.getPlace();
            console.log(place)
          });
      });
    });
  }

  toggleMap(){
    this.showStoresOnMap = !this.showStoresOnMap;
    this.btnText = this.showStoresOnMap ? 'Hide Map' : 'View all stores on map';
  }
}
