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
  lat: number = 52;
  lng: number = 13;
  zoom: number = 4;

  gmapsOptions: Object = {};
  place: any;
  marker: Marker;
  store: Store;
  products: string;
  selectedItems: Array<Object>;
  otherItems: string = '';
  shortName: string;

  productOptions = [
    {name: 'Vegatables', checked: false}
  ];
  

  constructor(private loader: MapsAPILoader,
   private _zone: NgZone,
   private flashMessage: FlashMessagesService,
   private backendService: BackendService,
   private authService: AuthService,
   private router: Router) { }

  ngOnInit() {
    this.addItems();
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 11;
      });
    }
    // this.backendService.getUsersCountryCode(this.lat, this.lng).subscribe(data =>{
    //      this.shortName = data.results[data.results.length - 1].address_components[0].short_name;
    //      this.gmapsOptions = {componentRestrictions: {country: this.shortName}}
    // });
    console.log(this.gmapsOptions);
    this.autocomplete();
  }

  addItems(){
    let items = [
      "Fruits" , "Meat", "Poultry", "Cheese", "Eggs", "Bread, cake, pastries", "Cereals (e.g. oats)", "Rice", "Pasta", "Nuts", "Dry Fruits", "Tea", "Coffee", "Nut Butter", "Honey", "Butter", "Zero waste acessories(e.g. toothbrush, lunchboxes, bottles etc.)", "Cleaning products", "Beauty products", "Body products", "Second hand clothing", "Second hand furniture", "Second hand appliances", "Zero waste friendly take away"
    ]

    items.forEach((item) => {
      this.addProductItem(item);
    });
  }

  addProductItem(itemName){
    this.productOptions.push({
      name: itemName,
      checked: false
    })
  }

  resetSelections(){
    this.productOptions.forEach((item) => {
      item.checked = false;
    });
    this.selectedItems = [];
  }

  onSelectedProduct(){
    this.selectedItems = this.getSelectedProducts();
  }

  getSelectedProducts(){
    return this.productOptions
            .filter(opt => opt.checked)
            .map(opt => opt.name);
  }

  autocomplete(){
    this.loader.load().then(() => {
      var autocomplete = new google.maps.places.Autocomplete(document.getElementById("storeLocationInput"), this.gmapsOptions);
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
            //console.log(this.place.photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500}));
          });
      });
    });
  }

  onAddStoreSubmit(){
    if(!this.authService.validateNewStore(this.place, this.selectedItems, this.otherItems)){
      this.flashMessage.show('Please fill in all fields', {cssClass:'alert-danger', timeout: 3000});
      return false;
    }

    this.store = {
      id: this.place.id,
      name: this.place.name,
      address: this.place.formatted_address,
      products: this.otherItems.length == 0 ? this.selectedItems.join(", ") : this.selectedItems.length == 0 ? this.otherItems : this.selectedItems.join(", ") + ', ' + this.otherItems,
      openingHours: ["N/A"],
      lat: this.marker.lat,
      lng: this.marker.lng
    };

    if (this.place.hasOwnProperty("opening_hours")){
      this.store.openingHours = this.place.opening_hours.weekday_text;
    }

    this.backendService.addStore(this.store).subscribe(data => {
      if(data.success){
        this.flashMessage.show(data.msg, {cssClass:'alert-success', timeout: 3000});
      }else{
        this.flashMessage.show(data.msg, {cssClass:'alert-danger', timeout: 3000});
      }
      this.router.navigate(['/addstore']);
    });
  }
}
