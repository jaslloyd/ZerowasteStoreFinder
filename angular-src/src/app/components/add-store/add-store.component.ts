import { Component, OnInit, NgZone } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { BackendService } from '../../services/backend.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Marker } from '../../interfaces/marker';
import { Store } from '../../interfaces/store';
import { MapComponent } from '../map/map.component';
import { Location } from '@angular/common';

declare var google: any;
@Component({
  selector: 'app-add-store',
  templateUrl: './redesigned-add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  lat: number = 52;
  lng: number = 13;
  zoom: number = 4;

  stage: number = 1;
  gmapsOptions: Object = {}
  place: any;
  marker: Marker;
  store: Store;
  products: string;
  selectedItems: Array<Object>;
  otherItems: string = '';
  allStores: Store[] = [];
  productOptions = [
    {name: 'Vegetables', checked: false}
  ];
  
  validInput: boolean = true;
  storeInputClasses: string = "form-group"

  image: string = '';

  constructor(private loader: MapsAPILoader,
   private _zone: NgZone,
   private flashMessage: FlashMessagesService,
   private backendService: BackendService,
   private authService: AuthService,
   private router: Router,
   private _location: Location) { }

  ngOnInit() {
    this.addItems();

    this.backendService.getAllStores().subscribe(stores => {
      this.allStores = stores;
    });
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 11;
      });
    }
    // this.backendService.getUsersCountryCode(this.lat, this.lng).subscribe(data =>{
    //      let gmapsOptions: Object = {};
    //      let shortName: string;
    //      shortName = data.results[data.results.length - 1].address_components[0].short_name;
    //      gmapsOptions = {componentRestrictions: {country: this.shortName}}
    // });
    this.autocomplete();
  }

  addItems(){
    let fruitsVeggies = ["Fruits"];
    let animalProducts = ["Meat", "Poultry", "Cheese", "Eggs", "Butter"];
    let cereals = ["Rice", "Pasta"];
    let breakfastItems = ["Bread, Cakes, Pastries", "Breakfast Cereals", "Nuts", "Dry Fruit", "Tea", "Coffee", "Nut Butter", "Honey"];
    let otherItems = ["Acessories(e.g. lunchboxes, bottles etc.)", "Cleaning products", "Beauty products", "Body products", "Second hand clothing", "Second hand furniture", "Second hand appliances", "Zero waste friendly take away"];

    this.addProductItems(fruitsVeggies);
    this.addProductItems(animalProducts);
    this.addProductItems(cereals);
    this.addProductItems(breakfastItems);
    this.addProductItems(otherItems);

  }

  addProductItems(items){
    items.forEach((item) => {
      this.productOptions.push({
        name: item,
        checked: false
      });
    });
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

            if(place.hasOwnProperty('geometry')){
              this.marker = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
                label: place.name,
                draggable: false
              };

              this.lat = this.marker.lat;
              this.lng = this.marker.lng;
              this.zoom = 17;
              this.place = place;
              this.storeInputClasses = "form-group has-success has-feedback";
              this.validInput = true;
              this.image = this.place.hasOwnProperty("photos") ? this.place.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300}) : 'https://vignette2.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337';
            } else {
              this.storeInputClasses = "form-group has-error has-feedback";
              this.validInput = false;
            }
          });
      });
    });
  }

  onAddStoreSubmit(){
    if(!this.authService.validateSelectedItems(this.selectedItems, this.otherItems)){
      window.scrollTo(0, 0);
      this.flashMessage.show('Please select at least one item the store sells', {cssClass:'alert-danger', timeout: 3000});
      return false;
    }

    this.store = {
      id: this.place.id,
      name: this.place.name,
      address: this.place.formatted_address,
      products: this.otherItems.length == 0 ? this.selectedItems.join(", ") : this.selectedItems.length == 0 ? this.otherItems : this.selectedItems.join(", ") + ', ' + this.otherItems,
      openingHours: this.place.hasOwnProperty("opening_hours") ? this.place.opening_hours.weekday_text : ["N/A"],
      lat: this.marker.lat,
      lng: this.marker.lng
    };

    this.backendService.addStore(this.store).subscribe(data => {
      if(data.success){
        this.router.navigate(['/']);
        this.flashMessage.show(data.msg, {cssClass:'alert-success', timeout: 5000});
      }else{
        window.scrollTo(0, 0);
        this.flashMessage.show(data.msg, {cssClass:'alert-danger', timeout: 5000});
      }
    });

  }

  resetSelections(){
    this.productOptions.forEach((item) => {
      item.checked = false;
    });
    this.selectedItems = [];
  }

  nextStage(){
    if(!this.authService.validateNewStore(this.place)){
      window.scrollTo(0, 0);
      this.flashMessage.show('Please search and select the store you want to add', {cssClass:'alert-danger', timeout: 3000});
      return false;
    } else{
      this.backendService.getStore(this.place.id).subscribe(store => {
        if(!store){
          this.stage += 1;
        }else{
          this.flashMessage.show('Store has already been added. Please try added another Store', {cssClass:'alert-warning', timeout: 5000});
        }
        
      }); 
    }
  }

  prevStage(e){
    this.stage -= 1;
    // location.reload();
  }
}
