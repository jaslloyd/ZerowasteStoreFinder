import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { BackendService } from '../../services/backend.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Store } from '../../interfaces/store';
import { Location } from '@angular/common';

declare var google: any;
@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  gmapsOptions: Object = {};
  place: any;
  store: Store;
  fullStoreName: '';
  products: string;
  selectedItems: Array<Object> = [];
  allStores: Store[] = [];
  productOptions = [
    {name: 'Vegetables', checked: false}
  ];
  validInput = true;
  storeInputClasses = '';
  errMsg = '';
  image = '';

  @ViewChild('modelCloseButton') modelCloseButton: ElementRef;

  constructor(private loader: MapsAPILoader,
   private _zone: NgZone,
   private flashMessage: FlashMessagesService,
   private backendService: BackendService,
   private authService: AuthService,
   private router: Router,
   private _location: Location) { }

  ngOnInit() {
    this.autocomplete();
  }

  addItems() {
    const fruitsVeggies = ['Fruits'];
    const animalProducts = ['Meat', 'Poultry', 'Fish' , 'Cheese', 'Eggs', 'Butter'];
    const cereals = ['Rice', 'Pasta'];
    const breakfastItems = ['Bread, Cakes, Pastries', 'Breakfast Cereals', 'Nuts', 'Dry Fruit', 'Tea', 'Coffee', 'Nut Butter', 'Honey'];
    const otherItems = ['Acessories(e.g. lunchboxes, bottles etc.)', 'Cleaning products', 'Beauty products', 'Body products', 'Second hand clothing', 'Second hand furniture', 'Second hand appliances', 'Zero waste friendly take away'];

    this.addProductItems(fruitsVeggies);
    this.addProductItems(animalProducts);
    this.addProductItems(cereals);
    this.addProductItems(breakfastItems);
    this.addProductItems(otherItems);

  }

  addProductItems(items) {
    items.forEach((item) => {
      this.productOptions.push({
        name: item,
        checked: false
      });
    });
  }

  onSelectedProduct() {
    this.selectedItems = this.getSelectedProducts();
  }

  getSelectedProducts() {
    return this.productOptions
            .filter(opt => opt.checked)
            .map(opt => opt.name);
  }

  autocomplete() {
    this.loader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(document.getElementById('storeLocationInput'), this.gmapsOptions);
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
          this._zone.run(() => {
            let place = autocomplete.getPlace();
            if (place.hasOwnProperty('geometry')) {
              this.backendService.getStore(place.id).subscribe(store => {
                  if (!store) {
                    this.place = place;
                    this.storeInputClasses = 'is-valid';
                    this.addItems();
                    this.validInput = true;
                    this.image = this.place.hasOwnProperty('photos') ? this.place.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300}) : 'https://vignette2.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337';
                  }else {
                    this.invalidInput(`${store.name} has already been added.`);
                  }
              });
            } else {
              this.invalidInput();
            }
          });
      });
    });
  }

  invalidInput(msg = 'Please provide a valid store/shop.') {
    this.storeInputClasses = 'is-invalid';
    this.validInput = false;
    this.errMsg = msg;

  }

  onAddStoreSubmit() {
    this.store = {
      id: this.place.id,
      name: this.place.name,
      address: this.place.formatted_address,
      products: this.selectedItems.join(', '),
      openingHours: this.place.hasOwnProperty('opening_hours') ? this.place.opening_hours.weekday_text : ['N/A'],
      lat: this.place.lat,
      lng: this.place.lng
    };

    this.backendService.addStore(this.store).subscribe(data => {
      if (data.success) {
        this.modelCloseButton.nativeElement.click();
        this.router.navigate(['/']);
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
      } else {
        window.scrollTo(0, 0);
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
    });

  }

  resetSelections() {
    this.productOptions.forEach(item => item.checked = false);
    this.selectedItems = [];
  }
}
