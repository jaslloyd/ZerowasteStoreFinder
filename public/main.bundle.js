webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <!-- Allows flash messages to be displayed on any page -->\n   <flash-messages></flash-messages> \n  <!-- Displays the pages at the route we request -->\n   <p> <router-outlet></router-outlet> </p> \n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_store_finder_store_finder_component__ = __webpack_require__("../../../../../src/app/components/store-finder/store-finder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_map_map_component__ = __webpack_require__("../../../../../src/app/components/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_store_add_store_component__ = __webpack_require__("../../../../../src/app/components/add-store/add-store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_store_store_component__ = __webpack_require__("../../../../../src/app/components/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_donate_donate_component__ = __webpack_require__("../../../../../src/app/components/donate/donate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// Import our services for the application



// Tells angular where to direct the requests
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_store_finder_store_finder_component__["a" /* StoreFinderComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_12__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'addstore', component: __WEBPACK_IMPORTED_MODULE_13__components_add_store_add_store_component__["a" /* AddStoreComponent */] },
    { path: 'donate', component: __WEBPACK_IMPORTED_MODULE_18__components_donate_donate_component__["a" /* DonateComponent */] },
    { path: 'store/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_store_store_component__["a" /* StoreComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__components_store_finder_store_finder_component__["a" /* StoreFinderComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_store_finder_store_finder_component__["a" /* StoreFinderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_add_store_add_store_component__["a" /* AddStoreComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_store_store_component__["a" /* StoreComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_donate_donate_component__["a" /* DonateComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyAY6CukXgRddILNPPXpJ5j8CUepn2pX7p8',
                libraries: ['places'],
                language: 'en'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__services_backend_service__["a" /* BackendService */], __WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#questions{\r\n    border-right: 1px solid green;\r\n}\r\n\r\n#contactArea{\r\n    margin-top: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div id=\"questions\" class=\"col-md-8\">\n        <h4>Zero waste FAQ's</h4>\n        <div *ngFor=\"let question of questions; let i = index\" class=\"row\">\n            <p><b>Q: {{question.question}}</b></p>\n            <p><b>A:</b> {{question.answer}}</p>\n        </div>\n    </div>\n    <div class=\"col-sm-4\">\n        <h4>Useful Zero waste links</h4>\n        <a href=\"https://www.facebook.com/groups/zerowasteireland/?ref=br_rs\">Zero Waste Ireland</a>\n        <br/>\n        <a href=\"https://www.facebook.com/groups/journeytozerowaste/\">Journey to Zero Waste</a>\n    </div>\n</div>\n<div id=\"contactArea\" class=\"row\">\n    <hr />\n    <div class=\"col-sm-12\">\n        <app-contact></app-contact>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.questions = [];
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.addQuestion('What is Zero Waste?', 'Zero Waste is a philosophy and a design principle for the 21st Century. It includes \'recycling\' but goes beyond recycling by taking a \'whole system\' approach to the vast flow of resources and waste through human society.Zero Waste maximizes recycling, minimizes waste, reduces consumption and ensures that products are made to be reused, repaired or recycled back into nature or the marketplace.');
        this.addQuestion('What is this website?', 'This website was built to support the Zero Waste community by providing a general place to find stores that sell zero waste products. If you know a store that sells zero waste products and its not on the website then add it!');
    };
    AboutComponent.prototype.addQuestion = function (question, answer) {
        this.questions.push({
            'question': question,
            'answer': answer
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-store/add-store.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 350px;\r\n}\r\n\r\n#storeLocationInput {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.btn-success {\r\n  background-color: #40A497;\r\n}\r\n\r\n/*.scrollbox {\r\n  height:250px;\r\n  overflow-y:scroll;\r\n}*/\r\n\r\n.form-control-inline {\r\n   width: auto;\r\n   float: right;\r\n   margin-right: 5px;\r\n}\r\n\r\n.padrow {\r\n  margin-top: 25px\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-store/add-store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddStoreComponent = (function () {
    function AddStoreComponent(loader, _zone, flashMessage, backendService, authService, router, _location) {
        this.loader = loader;
        this._zone = _zone;
        this.flashMessage = flashMessage;
        this.backendService = backendService;
        this.authService = authService;
        this.router = router;
        this._location = _location;
        this.lat = 52;
        this.lng = 13;
        this.zoom = 4;
        this.stage = 1;
        this.gmapsOptions = {};
        this.fullStoreName = '';
        this.otherItems = '';
        this.allStores = [];
        this.productOptions = [
            { name: 'Vegetables', checked: false }
        ];
        this.validInput = true;
        this.storeInputClasses = "form-group";
        this.image = '';
    }
    AddStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addItems();
        this.backendService.getAllStores().subscribe(function (stores) {
            _this.allStores = stores;
        });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 11;
            });
        }
        // this.backendService.getUsersCountryCode(this.lat, this.lng).subscribe(data =>{
        //      let gmapsOptions: Object = {};
        //      let shortName: string;
        //      shortName = data.results[data.results.length - 1].address_components[0].short_name;
        //      gmapsOptions = {componentRestrictions: {country: this.shortName}}
        // });
        this.autocomplete();
    };
    AddStoreComponent.prototype.addItems = function () {
        var fruitsVeggies = ["Fruits"];
        var animalProducts = ["Meat", "Poultry", "Fish", "Cheese", "Eggs", "Butter"];
        var cereals = ["Rice", "Pasta"];
        var breakfastItems = ["Bread, Cakes, Pastries", "Breakfast Cereals", "Nuts", "Dry Fruit", "Tea", "Coffee", "Nut Butter", "Honey"];
        var otherItems = ["Acessories(e.g. lunchboxes, bottles etc.)", "Cleaning products", "Beauty products", "Body products", "Second hand clothing", "Second hand furniture", "Second hand appliances", "Zero waste friendly take away"];
        this.addProductItems(fruitsVeggies);
        this.addProductItems(animalProducts);
        this.addProductItems(cereals);
        this.addProductItems(breakfastItems);
        this.addProductItems(otherItems);
    };
    AddStoreComponent.prototype.addProductItems = function (items) {
        var _this = this;
        items.forEach(function (item) {
            _this.productOptions.push({
                name: item,
                checked: false
            });
        });
    };
    AddStoreComponent.prototype.onSelectedProduct = function () {
        this.selectedItems = this.getSelectedProducts();
    };
    AddStoreComponent.prototype.getSelectedProducts = function () {
        return this.productOptions
            .filter(function (opt) { return opt.checked; })
            .map(function (opt) { return opt.name; });
    };
    AddStoreComponent.prototype.autocomplete = function () {
        var _this = this;
        this.loader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById("storeLocationInput"), _this.gmapsOptions);
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                _this._zone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.hasOwnProperty('geometry')) {
                        _this.marker = {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng(),
                            label: place.name,
                            draggable: false
                        };
                        _this.lat = _this.marker.lat;
                        _this.lng = _this.marker.lng;
                        _this.zoom = 17;
                        _this.place = place;
                        _this.storeInputClasses = "form-group has-success has-feedback";
                        _this.validInput = true;
                        _this.image = _this.place.hasOwnProperty("photos") ? _this.place.photos[0].getUrl({ 'maxWidth': 300, 'maxHeight': 300 }) : 'https://vignette2.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337';
                    }
                    else {
                        _this.storeInputClasses = "form-group has-error has-feedback";
                        _this.validInput = false;
                    }
                });
            });
        });
    };
    AddStoreComponent.prototype.onAddStoreSubmit = function () {
        var _this = this;
        if (!this.authService.validateSelectedItems(this.selectedItems, this.otherItems)) {
            window.scrollTo(0, 0);
            this.flashMessage.show('Please select at least one item the store sells', { cssClass: 'alert-danger', timeout: 3000 });
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
        this.backendService.addStore(this.store).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/']);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                window.scrollTo(0, 0);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    AddStoreComponent.prototype.resetSelections = function () {
        this.productOptions.forEach(function (item) {
            item.checked = false;
        });
        this.selectedItems = [];
    };
    AddStoreComponent.prototype.nextStage = function () {
        var _this = this;
        if (!this.authService.validateNewStore(this.place)) {
            window.scrollTo(0, 0);
            this.flashMessage.show('Please search and select the store you want to add', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        else {
            this.backendService.getStore(this.place.id).subscribe(function (store) {
                if (!store) {
                    _this.fullStoreName = document.getElementById('storeLocationInput').value;
                    _this.stage += 1;
                }
                else {
                    _this.flashMessage.show('Store has already been added. Please try added another Store', { cssClass: 'alert-warning', timeout: 5000 });
                }
            });
        }
    };
    AddStoreComponent.prototype.prevStage = function () {
        this.stage -= 1;
        document.getElementById('storeLocationInput').value = this.fullStoreName;
    };
    return AddStoreComponent;
}());
AddStoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-store',
        template: __webpack_require__("../../../../../src/app/components/add-store/redesigned-add-store.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-store/add-store.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]) === "function" && _g || Object])
], AddStoreComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=add-store.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-store/redesigned-add-store.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"text-center\">Add new store</h3>\n  <form (submit)=\"onAddStoreSubmit()\">\n    <div [hidden]=\"stage != 1\" class=\"row padrow\">\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n          <h5><label for=\"storeLocationInput\"><b>Locate Store</b></label></h5>\n          <div id=\"storeInputDiv\" [ngClass]=\"storeInputClasses\">\n            <input type=\"text\" id=\"storeLocationInput\" class=\"form-control\" placeholder=\"Enter Store name\" required>\n\n            <span *ngIf=\"place?.id && validInput\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"place?.id && validInput\" id=\"inputGroupSuccess1Status\" class=\"sr-only\">(success)</span>\n\n            <span *ngIf=\"!validInput\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"!validInput\" id=\"inputError2Status\" class=\"sr-only\">(error)</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n          <agm-map #gm [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [zoomControl]=\"true\">\n            <agm-marker *ngFor=\"let m of allStores\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [label]=\"\" [markerDraggable]=\"false\"\n              (markerClick)=\"gm.lastOpen?.close(); gm.lastOpen = infoWindow\">\n\n              <agm-info-window #infoWindow>\n                <p><strong>{{m.name}}</strong></p>\n                <p><strong>Address: </strong>{{m.address}}</p>\n                <p><strong>Zero waste products: </strong>{{m.products}}</p>\n                <a class=\"\" [routerLink]=\"['/store', m.id]\">More information</a>\n              </agm-info-window>\n            </agm-marker>\n\n            <agm-marker [latitude]=\"marker?.lat\" [longitude]=\"marker?.lng\" [label]=\"marker?.label\" [markerDraggable]=\"marker?.draggable\">\n              <agm-info-window>\n                <p><strong>{{place?.name}}</strong></p>\n                <p>{{place?.formatted_address}}</p>\n              </agm-info-window>\n            </agm-marker>\n          </agm-map>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"container\">\n          <h5>Store not found on google maps? <a [routerLink]=\"['/contact']\">Contact us!</a></h5>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"stage == 2\">\n      <div class=\"row padrow\">\n        <div class=\"col-md-6\">\n          <h3><b>{{place?.name}}</b></h3>\n          <img alt=\"store_img\" src=\"{{image}}\" />\n          <h5><span class=\"glyphicon glyphicon-home blueIcon\" aria-hidden=\"true\"></span> <b>Address</b>: {{place?.formatted_address}}</h5>\n          <h5><span class=\"glyphicon glyphicon-phone blueIcon\" aria-hidden=\"true\"></span> <b>Phone Number</b>: {{place?.formatted_phone_number}}</h5>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <h3><label for=\"productOptions\"><b> Select Zero Waste products sold: </b></label></h3>\n            <a id=\"resetButton\" class=\"form-control-inline btn btn-sm btn-danger\" (click)=\"resetSelections()\">Reset Selections</a>            <br/>\n            <div class=\"col-sm-6\">\n              <div *ngFor=\"let option of productOptions | slice:0:productOptions.length/2\">\n                <label>\n              <input type=\"checkbox\" name=\"options\" (change)=\"onSelectedProduct()\" value=\"{{option.name}}\" [(ngModel)]=\"option.checked\" />\n              {{option.name}}\n            </label>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div *ngFor=\"let option of productOptions | slice:(productOptions.length/2)+1:productOptions.length\">\n                <input type=\"checkbox\" name=\"options\" (change)=\"onSelectedProduct()\" value=\"{{option.name}}\" [(ngModel)]=\"option.checked\"\n                /> {{option.name}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <label for=\"products\"><b>Selected products:</b>\n            <span *ngFor=\"let product of selectedItems\">{{product}}, </span>\n          </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <div class=\"col-sm-2\">\n            <label for=\"products\"><b>Other products:</b></label>\n          </div>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" [(ngModel)]=\"otherItems\" name=\"otherItems\" placeholder=\"Other products not in list\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row padrow\">\n      <div class=\"form-group\">\n        <span class=\"pull-left\"> \n          <a *ngIf=\"stage > 1\" (click)=\"prevStage()\" class=\"btn btn-lg btn-primary\">Prev</a>\n        </span>\n        <span class=\"pull-right\">\n          <a *ngIf=\"stage == 1\"(click)=\"nextStage()\" class=\"btn btn-lg btn-primary\">Next</a>\n          <button *ngIf=\"stage > 1\"type=\"submit\" class=\"btn btn-lg btn-success\">Add Store</button>\n        </span>\n      </div>\n    </div>\n  </form>\n  <br/>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h3 class=\"text-center\">\n        Contact us <br/><small>Feel free to contact us</small>\n    </h3>\n  </div>\n</div>\n<form (submit)=\"onContactSubmit()\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"name\">\n                    Name</label>\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" id=\"name\" class=\"form-control\" placeholder=\"Enter name\" required=\"required\" />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">\n                    Email Address</label>\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-envelope\"></span>\n                    </span>\n                    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Enter email\" required=\"required\" /></div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"subject\">\n                    Subject</label>\n                <select id=\"subject\" [(ngModel)]=\"subject\" name=\"subject\" class=\"form-control\" required>\n                        <option *ngFor=\"let sub of subjects\" [ngValue]=\"sub\">{{ sub }}</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"name\">\n                    Message</label>\n                <textarea name=\"message\" [(ngModel)]=\"message\" name=\"message\" id=\"message\" class=\"form-control\" rows=\"9\" cols=\"25\" required=\"required\"\n                    placeholder=\"Message\"></textarea>\n            </div>\n        </div>\n        <div class=\"col-md-12\">\n            <button type=\"submit\" class=\"btn btn-primary pull-right\" id=\"btnContactUs\">\n                Send Message</button>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(flashMessage, backendService, router) {
        this.flashMessage = flashMessage;
        this.backendService = backendService;
        this.router = router;
        this.subjects = ["Choose one", "Feature Suggestion", "Bug Report", "Support", "Other"];
        this.subject = this.subjects[0];
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onContactSubmit = function () {
        var _this = this;
        var message = {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message
        };
        this.backendService.addMessage(message).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.router.navigate(['/']);
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ContactComponent);

var _a, _b, _c;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".badge{\r\n  font-size: 25px;\r\n}\r\n\r\n.panel-heading {\r\n  border-bottom: 2px solid #f5f5f5;\r\n  background-color: white !important;\r\n}\r\n\r\n.well {\r\n  background-color: white !important;\r\n  border: 2px solid #f5f5f5;\r\n}\r\n\r\n.storeButton {\r\n  color: blue;\r\n}\r\n\r\n.storeButton:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n.badge{\r\n  font-size: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"panel panel-default\">\n  <h3 class=\"panel-heading text-center\"> <span class=\"glyphicon glyphicon-cog blueIcon\" aria-hidden=\"true\"></span> Admin Dashboard</h3>\n  <div class=\"panel-body\">\n    <div class=\"col-sm-6\">\n      <div class=\"well\">\n        <h3>Stores: <span class=\"badge\">{{stores.length}}</span></h3>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filter\" (ngModelChange)=\"filterStores()\" placeholder=\"Filter\" value=\"{{filter}}\">\n        <div class=\"list-group-item\" *ngFor=\"let store of stores; let i = index\">\n          <span id=\"closeButton\"><button (click)=\"deleteStore(store.id, i)\" class=\"btn btn-danger\">X</button></span>\n          <button class=\"storeButton btn btn-link\" data-toggle=\"collapse\" [attr.data-target]=\"'#storeInfo'+i\" >{{store.name}}</button>\n          <div [attr.id]=\"'storeInfo'+i\" class=\"panel-collapse collapse\">\n            <div id=\"products\" class=\"panel-body\">\n              <span>Zero waste Products:</span>\n              <input type=\"text\" [attr.id]=\"'products'+i\" name=\"products\" value=\"{{store.products}}\" class=\"form-control\" required>\n              <button class=\"btn btn-success\" (click)=\"updateStore(store, i)\" href=\"#\">Update Store</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"well\">\n        <h3>Messages:<span class=\"badge\">{{messages.length}}</span></h3>\n          <div *ngFor=\"let message of messages; let i = index\" class=\"list-group-item\">\n            <div class=\"row\">\n              <div class=\"col-md-2\">\n                  <span id=\"closeButton\"><button (click)=\"deleteMessage(message._id, i)\" class=\"btn btn-danger\">X</button></span>\n              </div>\n              <div class=\"col-md-6\">\n                  <a data-toggle=\"collapse\" [attr.data-target]=\"'#messageInfo'+i\" >{{message.subject}}</a>\n              </div>\n              <div class=\"col-md-4\">\n                  <span class=\"badge\">{{message.Created_at | slice:0:10}}</span>\n              </div>\n            </div>\n            \n           \n            <div [attr.id]=\"'messageInfo'+i\" class=\"panel-collapse collapse\">\n              <div id=\"products\" class=\"panel-body\">\n                <span>Name: {{message.name}}</span>\n                <p>Email: <a href=\"mailto:{{message.email}}\">{{message.email}}</a></p>\n                <p>Message: {{message.message}}</p>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(flashMessage, backendService, router) {
        this.flashMessage = flashMessage;
        this.backendService = backendService;
        this.router = router;
        this.stores = [];
        this.messages = [];
        this.filter = '';
        this.orignalStores = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backendService.getAllStores().subscribe(function (stores) {
            _this.stores = stores;
            _this.orignalStores = _this.stores;
        });
        this.backendService.getMessages().subscribe(function (messages) {
            _this.messages = messages;
            console.log(_this.messages);
        });
    };
    DashboardComponent.prototype.deleteStore = function (storeId, index) {
        var _this = this;
        this.backendService.deleteStore(storeId).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.stores.splice(index, 1);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    DashboardComponent.prototype.updateStore = function (store, index) {
        var _this = this;
        var updatedStore = store;
        // Typescript is type safe need to cast...
        updatedStore.products = document.getElementById('products' + index).value;
        this.backendService.editStore(updatedStore).subscribe(function (data) {
            if (data.success) {
                window.scrollTo(0, 0);
                _this.flashMessage.show('Store updated', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                window.scrollTo(0, 0);
                _this.flashMessage.show('Store update failed...', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    DashboardComponent.prototype.deleteMessage = function (messageId, index) {
        var _this = this;
        this.backendService.deleteMessage(messageId).subscribe(function (data) {
            if (data.success) {
                window.scrollTo(0, 0);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.messages.splice(index, 1);
                _this.router.navigate(['/dashboard']);
            }
            else {
                window.scrollTo(0, 0);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    DashboardComponent.prototype.filterStores = function () {
        var _this = this;
        this.stores = this.orignalStores
            .filter(function (store) {
            return store.name.toLowerCase().includes(_this.filter.toLowerCase());
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/donate/donate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/donate/donate.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Donate</h3>\n<div class=\"row\">\n    <div class=\"col-sm-10\">\n        <p>This website was created on our free time to benefit the Zero Waste community\n        and we are happy to help out. However we are paying for the hosting and domain registration out of own pockets.\n        The cost to run this site is €100+ per year(which includes 12 months of hosting and domain name registration). We don't like asking for money and we want to keep this site up  for a long time so any donations would be greatly appricated</p>\n        <p>We completely understand that not everyone has the money to donate so please only donate if you can. If you can't donate sharing the site with your friends and family would be greatly appricated.</p>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <form ngNoForm action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\n            <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n            <input type=\"hidden\" name=\"hosted_button_id\" value=\"F524VW252FVHQ\">\n            <input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">\n            <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n        </form>            \n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/donate/donate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DonateComponent = (function () {
    function DonateComponent() {
    }
    DonateComponent.prototype.ngOnInit = function () {
    };
    return DonateComponent;
}());
DonateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-donate',
        template: __webpack_require__("../../../../../src/app/components/donate/donate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/donate/donate.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DonateComponent);

//# sourceMappingURL=donate.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\r\n    width:100%;\r\n    min-height:1%;\r\n    color: black;\r\n    font-size: 15px;\r\n}\r\n\r\n#githubButton{\r\n  background-color: #FFF;\r\n  color: rgb(102,43,129);\r\n}\r\n\r\n.clear { clear: both; height: 100px; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clear\"></div>\r\n<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n          <p>Designed and Developed by Jason Lloyd</p>\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\" style=\"padding-bottom:5px;padding-top:5px;\">\r\n        <a class=\"btn btn-default btn-sm btn-git\" href=\"http://github.com/thedeployguy\" id =\"githubButton\"><i class=\"fa fa-github fa-2x\"></i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"page-header text-center\">Admin Login</h3>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username:</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password:</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Login</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        // Data should contain if success or not and the auth token we need to store
        this.authService.login(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "  <agm-marker\n      *ngFor=\"let m of allStores\"\n      [latitude]=\"m.lat\"\n      [longitude]=\"m.lng\"\n      [label]=\"\"\n      [markerDraggable]=\"false\">\n\n      <agm-info-window #infoWindow>\n        <p><strong>{{m.name}}</strong></p>\n        <p><strong>Address: </strong>{{m.address}}</p>\n        <p><strong>Zero waste products: </strong>{{m.products}}</p>\n        <a class=\"\" [routerLink]=\"['/store', m.id]\">More information</a>\n      </agm-info-window>\n  </agm-marker>"

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core_services__ = __webpack_require__("../../../../@agm/core/services.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = (function () {
    function MapComponent(backendService, gmapsApi, markerManager) {
        this.backendService = backendService;
        this.gmapsApi = gmapsApi;
        this.markerManager = markerManager;
        this.allStores = [];
        this.lat = 52;
        this.lng = 13;
        this.zoom = 4;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backendService.getAllStores().subscribe(function (stores) {
            _this.allStores = stores;
        });
    };
    return MapComponent;
}());
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/components/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/map/map.component.css")]
    })
    //https://developers.google.com/maps/documentation/javascript/marker-clustering
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core_services__["a" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core_services__["a" /* GoogleMapsAPIWrapper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core_services__["b" /* MarkerManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core_services__["b" /* MarkerManager */]) === "function" && _c || Object])
], MapComponent);

var _a, _b, _c;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-inverse {\r\n  background-color: #40A497;\r\n  font-size: 17px;\r\n}\r\n\r\n.navbar-inverse .navbar-brand{\r\n  color: #ffffff;\r\n}\r\n\r\n.navbar-inverse .navbar-brand:hover{\r\n  color: #D7D7D7;\r\n}\r\n\r\nli > a {\r\n  color: #ffffff;\r\n}\r\n\r\n.navbar-inverse .navbar-nav>li>a:hover{\r\n  color: #D7D7D7;\r\n}\r\n.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:hover, .navbar-inverse .navbar-nav>.active>a:focus {\r\n  background-color: #19403B;\r\n}\r\n\r\n.navbar-inverse .navbar-toggle .icon-bar {\r\n    background-color: #ffffff;\r\n}\r\n\r\n.navbar-brand{\r\n  font-size: 20px;\r\n}\r\n\r\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form{\r\n  border-color: #40A497;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n   <div class=\"container\">\r\n     <div class=\"navbar-header\">\r\n       <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n         <span class=\"sr-only\">Toggle navigation</span>\r\n         <span class=\"icon-bar\"></span>\r\n         <span class=\"icon-bar\"></span>\r\n         <span class=\"icon-bar\"></span>\r\n       </button>\r\n       <a class=\"navbar-brand\" href=\"#\">Zero Waste Shop Finder</a>\r\n     </div>\r\n     <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n       <ul class=\"nav navbar-nav navbar-right\">\r\n         <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Find Stores</a></li>\r\n         <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/addstore']\">Add Store</a></li>\r\n         <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/about']\">About | Contact</a></li>\r\n         <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/donate']\">Donate</a></li>\r\n         <!--<li *ngIf=\"!authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>-->\r\n         <li *ngIf=\"isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n         <li *ngIf=\"isLoggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n       </ul>\r\n     </div>\r\n   </div>\r\n </nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Logout successful', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/store-finder/store-finder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 500px;\r\n}\r\n #buttons {\r\n   padding-top: 10px;\r\n   padding-bottom: 10px;\r\n }\r\n\r\n#noResults {\r\n  padding-top: 50px;\r\n}\r\n\r\n#storeQueryField {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-success {\r\n  background-color: #40A497;\r\n}\r\n\r\n.well{\r\n  background-color: #FFFFFF;\r\n  box-shadow: -10px -5px 25px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n#query{\r\n  margin-top: 25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/store-finder/store-finder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <label for=\"storeFinderInput\" class=\"col-sm-12 control-label text-center\"></label>\n  <div class=\"col-sm-12 text-center\">\n    <div id=\"title\" *ngIf=\"query.length == 0\">\n      <h3>Zero Waste Shop Finder</h3>\n    </div>\n    <div id=\"query\"> \n      <input id=\"storeQueryField\" type=\"text\" name=\"storeFinderInput\" [(ngModel)]=\"query\" (ngModelChange)=\"searchStores()\" class=\"form-control text-center\" placeholder=\"Type Store name, Location or Product e.g. 'Dublin 7 or Rice'\" required>\n    </div>\n  </div>\n</div>\n<div id=\"stores\" *ngIf=\"query.length > 0\">\n  <div class=\"row\" *ngFor=\"let store of stores\">\n    <div class=\"col-md-offset-1 col-md-10 col-sm-12\">\n      <div class=\"well\">\n        <h5><b>{{store.name}}</b></h5>\n        <p><span class=\"glyphicon glyphicon-home blueIcon\" aria-hidden=\"true\"></span>  Address: {{store.address}}</p>\n        <p><span class=\"glyphicon glyphicon-leaf greenIcon\" aria-hidden=\"true\"></span>  Zero Waste products: <b>{{store.products}}</b></p>\n        <p><span class=\"glyphicon glyphicon-time blueIcon\" aria-hidden=\"true\"></span>  Opening Hours Today: {{store.openingHours[dayIndex]}}</p>\n        <a class=\"btn btn-sm btn-primary\"[routerLink]=\"['/store', store.id]\">More information</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"noResults\" class=\"text-center\" *ngIf=\"noResults && query.length > 0\">\n  <h4>No Results found</h4>\n</div>\n<div class=\"row\">\n  <div id=\"buttons\" class=\"col-sm-12 text-center\">\n    <button id=\"mapBtn\" (click)=\"toggleMap()\" class=\"btn btn-success\">{{btnText}}</button>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"showStoresOnMap\">\n  <agm-map #gm [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [zoomControl]=\"true\">\n    <agm-marker\n        *ngFor=\"let m of allStores\"\n        [latitude]=\"m.lat\"\n        [longitude]=\"m.lng\"\n        [label]=\"\"\n        [markerDraggable]=\"false\"\n        (markerClick)=\"gm.lastOpen?.close(); gm.lastOpen = infoWindow\">\n\n        <agm-info-window #infoWindow>\n          <p><strong>{{m.name}}</strong></p>\n          <p><strong>Address: </strong>{{m.address}}</p>\n          <p><strong>Zero waste products: </strong>{{m.products}}</p>\n          <a class=\"\" [routerLink]=\"['/store', m.id]\">More information</a>\n        </agm-info-window>\n    </agm-marker>\n  </agm-map>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/store-finder/store-finder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreFinderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreFinderComponent = (function () {
    function StoreFinderComponent(backendService) {
        this.backendService = backendService;
        this.query = '';
        this.stores = [];
        this.lat = 52;
        this.lng = 13;
        this.zoom = 4;
        this.showStoresOnMap = false;
        this.btnText = "View all stores on map";
        this.noResults = false;
        this.allStores = [];
    }
    StoreFinderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var now = new Date();
        this.dayIndex = now.getDay() - 1;
        if (this.dayIndex == -1) {
            this.dayIndex = 6;
        }
        this.backendService.getAllStores().subscribe(function (stores) {
            _this.allStores = stores;
        });
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 11;
            });
        }
    };
    StoreFinderComponent.prototype.searchStores = function () {
        var _this = this;
        if (this.showStoresOnMap) {
            this.toggleMap();
        }
        if (this.query.trim().length > 0) {
            this.backendService.searchStores(this.query).subscribe(function (stores) {
                if (stores.length > 0) {
                    _this.stores = stores;
                    _this.noResults = false;
                }
                else {
                    _this.stores = [];
                    _this.noResults = true;
                }
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    StoreFinderComponent.prototype.toggleMap = function () {
        this.showStoresOnMap = !this.showStoresOnMap;
        this.btnText = this.showStoresOnMap ? 'Hide Map' : 'View all stores on map';
    };
    return StoreFinderComponent;
}());
StoreFinderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store-finder',
        template: __webpack_require__("../../../../../src/app/components/store-finder/store-finder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/store-finder/store-finder.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]) === "function" && _a || Object])
], StoreFinderComponent);

var _a;
//# sourceMappingURL=store-finder.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/store/store.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 300px;\r\n}\r\n\r\n.well {\r\n  background-color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/store/store.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"well\" *ngIf=\"store?.name\">\n      <button class=\"btn btn-warning\" (click)=\"goBack()\"><- BACK</button>\n      <h4>{{store.name}}</h4>\n      <p><span class=\"glyphicon glyphicon-home blueIcon\" aria-hidden=\"true\"></span>  Address: {{store.address}}</p>\n      <p><span class=\"glyphicon glyphicon-time blueIcon\" aria-hidden=\"true\"></span>  Opening Hours</p>\n      <ul>\n          <li *ngFor=\"let entry of store.openingHours\">{{entry}}</li>\n      </ul>\n      <p><span class=\"glyphicon glyphicon-leaf greenIcon\" aria-hidden=\"true\"></span>  Zero Waste products: {{store.products}}</p>\n      <p></p>\n      <div *ngIf=\"marker?.lat\">\n        <agm-map [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [zoom]=\"zoom\" [zoomControl]=\"true\">\n          <agm-marker\n            [latitude]=\"marker.lat\"\n            [longitude]=\"marker.lng\"\n            [label]=\"marker.label\"\n            [markerDraggable]=\"marker.draggable\">\n\n          </agm-marker>\n        </agm-map>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/store/store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StoreComponent = (function () {
    function StoreComponent(loader, _zone, backendService, flashMessage, activatedRoute, _location) {
        this.loader = loader;
        this._zone = _zone;
        this.backendService = backendService;
        this.flashMessage = flashMessage;
        this.activatedRoute = activatedRoute;
        this._location = _location;
        this.zoom = 15;
    }
    StoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.backendService.getStore(id).subscribe(function (store) {
                _this.store = store;
                _this.marker = {
                    lat: _this.store.lat,
                    lng: _this.store.lng,
                    label: _this.store.name,
                    draggable: false
                };
            }, function (err) {
                console.log(err);
                return false;
            });
        });
    };
    StoreComponent.prototype.goBack = function () {
        this._location.back();
    };
    return StoreComponent;
}());
StoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store',
        template: __webpack_require__("../../../../../src/app/components/store/store.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/store/store.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _f || Object])
], StoreComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=store.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.serverHostname = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
    }
    AuthService.prototype.validateNewStore = function (store) {
        if (store == undefined) {
            return false;
        }
        return true;
    };
    AuthService.prototype.validateSelectedItems = function (selectedItems, otherItems) {
        if (selectedItems == undefined || selectedItems.length == 0 && otherItems.length == 0) {
            return false;
        }
        return true;
    };
    AuthService.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverHostname + '/admin/login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        //Local storage can only store strings not objects
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.isLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/backend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackendService = (function () {
    function BackendService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.serverHostname = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl; //"http://localhost:3000"
        this.headers.append('Content-Type', 'application/json');
    }
    BackendService.prototype.searchStores = function (query) {
        return this.http.get(this.serverHostname + '/api/stores/search/' + query, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.addStore = function (store) {
        return this.http.post(this.serverHostname + '/api/stores/addStore', store, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.editStore = function (store) {
        return this.http.put(this.serverHostname + '/api/stores/' + store.id, store, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.deleteStore = function (storeID) {
        return this.http.delete(this.serverHostname + '/api/stores/' + storeID, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.getStore = function (storeID) {
        return this.http.get(this.serverHostname + '/api/stores/' + storeID, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.getAllStores = function () {
        return this.http.get(this.serverHostname + '/api/stores/all', { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.getAllMarkers = function () {
        return this.http.get(this.serverHostname + '/api/stores/locations', { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.getMessages = function () {
        return this.http.get(this.serverHostname + '/message/messages', { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.addMessage = function (message) {
        return this.http.post(this.serverHostname + '/message/addMessage', message, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.deleteMessage = function (messageID) {
        return this.http.delete(this.serverHostname + '/message/' + messageID, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.getUsersCountryCode = function (lat, lng) {
        return this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng, {})
            .map(function (res) { return res.json(); });
    };
    return BackendService;
}());
BackendService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], BackendService);

var _a;
//# sourceMappingURL=backend.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'https://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map