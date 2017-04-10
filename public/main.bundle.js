webpackJsonp([1,4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
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
    }
    AuthService.prototype.validateNewStore = function (store, products) {
        if (store == undefined || products == undefined || products == "") {
            return false;
        }
        return true;
    };
    AuthService.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // This returns an observeable (need to check what that means)
        return this.http.post('/admin/login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        //Local storeage can only store strings not objects
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
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
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/auth.service.js.map

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 409;


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(528);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/main.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(713),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/app.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_store_finder_store_finder_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_contact_contact_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_about_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_add_store_add_store_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_store_store_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_map_map_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_backend_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_footer_footer_component__ = __webpack_require__(533);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















// Tells angular where to direct the requests
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_store_finder_store_finder_component__["a" /* StoreFinderComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_9__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'addstore', component: __WEBPACK_IMPORTED_MODULE_11__components_add_store_add_store_component__["a" /* AddStoreComponent */] },
    { path: 'store/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_store_store_component__["a" /* StoreComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__components_store_finder_store_finder_component__["a" /* StoreFinderComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_store_finder_store_finder_component__["a" /* StoreFinderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_add_store_add_store_component__["a" /* AddStoreComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_store_store_component__["a" /* StoreComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_footer_footer_component__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAY6CukXgRddILNPPXpJ5j8CUepn2pX7p8',
                    libraries: ['places']
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_backend_service__["a" /* BackendService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/app.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(714),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/about.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backend_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(55);
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
    function AddStoreComponent(loader, _zone, flashMessage, backendService, authService, router) {
        this.loader = loader;
        this._zone = _zone;
        this.flashMessage = flashMessage;
        this.backendService = backendService;
        this.authService = authService;
        this.router = router;
        this.lat = 52;
        this.lng = 13;
        this.zoom = 3;
    }
    AddStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 10;
            });
        }
        this.autocomplete();
    };
    AddStoreComponent.prototype.autocomplete = function () {
        var _this = this;
        this.loader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById("storeLocationInput"), {});
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                _this._zone.run(function () {
                    var place = autocomplete.getPlace();
                    _this.marker = {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng(),
                        label: place.name,
                        draggable: false
                    };
                    _this.lat = _this.marker.lat;
                    _this.lng = _this.marker.lng;
                    // Make this zoom better
                    _this.zoom = 17;
                    _this.place = place;
                    //console.log(this.place.photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500}));
                });
            });
        });
    };
    AddStoreComponent.prototype.onAddStoreSubmit = function () {
        var _this = this;
        if (!this.authService.validateNewStore(this.place, this.products)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
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
        if (this.place.hasOwnProperty("opening_hours")) {
            this.store.openingHours = this.place.opening_hours.weekday_text;
        }
        this.backendService.addStore(this.store).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Store added', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.router.navigate(['/addstore']);
        });
    };
    AddStoreComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-store',
            template: __webpack_require__(715),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__["MapsAPILoader"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__["MapsAPILoader"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _f) || Object])
    ], AddStoreComponent);
    return AddStoreComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/add-store.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(55);
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
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(716),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/contact.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(55);
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
        this.allStores = [];
        this.messages = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backendService.getAllStores().subscribe(function (stores) {
            _this.allStores = stores;
        });
        this.backendService.getMessages().subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    DashboardComponent.prototype.deleteStore = function (storeId, index) {
        var _this = this;
        this.backendService.deleteStore(storeId).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Store deleted', { cssClass: 'alert-success', timeout: 3000 });
                _this.allStores.splice(index, 1);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show('Deleting store failed', { cssClass: 'alert-danger', timeout: 3000 });
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
                _this.flashMessage.show('Store updated', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Store update failed...', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    DashboardComponent.prototype.deleteMessage = function (messageId, index) {
        var _this = this;
        this.backendService.deleteMessage(messageId).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.messages.splice(index, 1);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(717),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(718),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/footer.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(55);
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
                _this.flashMessage.show('Login successful', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(719),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/login.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core_services__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core_services__);
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
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backendService.getAllStores().subscribe(function (stores) {
            _this.allStores = stores;
        });
    };
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(720),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core_services__["GoogleMapsAPIWrapper"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core_services__["GoogleMapsAPIWrapper"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core_services__["MarkerManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core_services__["MarkerManager"]) === 'function' && _c) || Object])
    ], MapComponent);
    return MapComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/map.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(110);
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
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(721),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__(67);
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
        this.zoom = 3;
        this.showStoresOnMap = false;
        this.btnText = "View all stores on map";
    }
    StoreFinderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var now = new Date();
        this.dayIndex = now.getDay() - 1;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 10;
            });
        }
    };
    StoreFinderComponent.prototype.searchStores = function () {
        var _this = this;
        if (this.query != '') {
            this.backendService.searchStores(this.query).subscribe(function (stores) {
                if (stores) {
                    _this.stores = stores;
                    console.log(stores);
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
    StoreFinderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-store-finder',
            template: __webpack_require__(722),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]) === 'function' && _a) || Object])
    ], StoreFinderComponent);
    return StoreFinderComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/store-finder.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(55);
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
    function StoreComponent(loader, _zone, backendService, flashMessage, activatedRoute) {
        this.loader = loader;
        this._zone = _zone;
        this.backendService = backendService;
        this.flashMessage = flashMessage;
        this.activatedRoute = activatedRoute;
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
    StoreComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(723),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__["MapsAPILoader"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__["MapsAPILoader"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], StoreComponent);
    return StoreComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/store.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(110);
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
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/environment.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
        this.serverHostname = "";
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
    BackendService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], BackendService);
    return BackendService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jay/Documents/GitHub/ZeroWasteStoreFinder/angular-src/src/backend.service.js.map

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ".sebm-google-map-container {\r\n  height: 300px;\r\n}\r\n\r\n#storeLocationInput {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.btn-success {\r\n  background-color: #33b833;\r\n  \r\n}\r\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "#closeButton{\r\n  margin-right: 25px;\r\n}\r\n\r\n.badge{\r\n  font-size: 25px;\r\n}\r\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "footer{\r\n    width:100%;\r\n    min-height:1%;\r\n    color: black;\r\n    font-size: 15px;\r\n}\r\n\r\n#githubButton{\r\n  background-color: #FFF;\r\n  color: rgb(102,43,129);\r\n}\r\n\r\n.clear { clear: both; height: 100px; }\r\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = ".sebm-google-map-container {\r\n  height: 300px;\r\n}\r\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ".navbar-inverse {\r\n  background-color: #33b833;\r\n  font-size: 17px;\r\n}\r\n\r\n.navbar-inverse .navbar-brand{\r\n  color: #ffffff;\r\n}\r\n\r\n.navbar-inverse .navbar-brand:hover{\r\n  color: #D7D7D7;\r\n}\r\n\r\nli > a {\r\n  color: #ffffff;\r\n}\r\n\r\n.navbar-inverse .navbar-nav>li>a:hover{\r\n  color: #D7D7D7;\r\n}\r\n.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:hover, .navbar-inverse .navbar-nav>.active>a:focus {\r\n  background-color: #77CA77;\r\n}\r\n\r\n.navbar-inverse .navbar-toggle .icon-bar {\r\n    background-color: #ffffff;\r\n}\r\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = ".sebm-google-map-container {\r\n  height: 300px;\r\n}\r\n #buttons {\r\n   padding-top: 10px;\r\n   padding-bottom: 10px;\r\n }\r\n\r\n#noResults {\r\n  padding-top: 50px;\r\n}\r\n\r\n#storeQueryField {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-success {\r\n  background-color: #33b833;\r\n}\r\n\r\n\r\n.well{\r\n  background-color: #FFFFFF;\r\n  box-shadow: -5px 5px 5px #888888;\r\n}\r\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ".sebm-google-map-container {\r\n  height: 300px;\r\n}\r\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <!-- Allows flash messages to be displayed on any page -->\n  <flash-messages></flash-messages>\n  <!-- Displays the pages at the route we request -->\n  <p> <router-outlet></router-outlet> </p>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n\n\n<h3>Donate</h3>\n<p>This website was created on our free time to benefit the zero waste community\nand we are happy to help out. However we are paying for the hosting and domain registration out of own pocket.</p>\n<p>The current cost to run this site is [] per year. We don't like asking for money and we want to keep this site up and running for a long time so any donations would be greatly appricated</p>\n<p>We completely understand that not everyone has the money to donate and we completely understand, please only donate if you can and you find the site useful. If you can't donate sharing the site with your friends would be greatly appricated</p>\n\n<form ngNoForm action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\n<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n<input type=\"hidden\" name=\"encrypted\" value=\"-----BEGIN PKCS7-----MIIHFgYJKoZIhvcNAQcEoIIHBzCCBwMCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYBDbZlELukM8RVTeM3pSwQIzMVx5SwMISWO2oGr5kCoFURe7uQLCii6M34roOwo5ZdhgLupwij/xk4qe71Fdf4ulQozvi0oy8N+K0qZsJWzlO0rvBont2g5Nk0eZhFPk1edbZTpctJ7Z50EMTP4xL3gizo77sFbJkmGkNK8eKRL9DELMAkGBSsOAwIaBQAwgZMGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQInVx4CKRY04aAcKkOv0uEEQ9Db5pdM4g0ppfaB1uUfKhuwf7vuD36tiyUiNv1A8hl9cIOGyvDEbVlwwB0to3ANDRBlxbPg0e+ZWodN4+L+FMtWgZ5u4z1PUR3crc6AxvpRsyuyeSAgMjhry7QUmSLSrMt1lLFbyhlKwOgggOHMIIDgzCCAuygAwIBAgIBADANBgkqhkiG9w0BAQUFADCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wHhcNMDQwMjEzMTAxMzE1WhcNMzUwMjEzMTAxMzE1WjCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMFHTt38RMxLXJyO2SmS+Ndl72T7oKJ4u4uw+6awntALWh03PewmIJuzbALScsTS4sZoS1fKciBGoh11gIfHzylvkdNe/hJl66/RGqrj5rFb08sAABNTzDTiqqNpJeBsYs/c2aiGozptX2RlnBktH+SUNpAajW724Nv2Wvhif6sFAgMBAAGjge4wgeswHQYDVR0OBBYEFJaffLvGbxe9WT9S1wob7BDWZJRrMIG7BgNVHSMEgbMwgbCAFJaffLvGbxe9WT9S1wob7BDWZJRroYGUpIGRMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbYIBADAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAIFfOlaagFrl71+jq6OKidbWFSE+Q4FqROvdgIONth+8kSK//Y/4ihuE4Ymvzn5ceE3S/iBSQQMjyvb+s2TWbQYDwcp129OPIbD9epdr4tJOUNiSojw7BHwYRiPh58S1xGlFgHFXwrEBb3dgNbMUa+u4qectsMAXpVHnD9wIyfmHMYIBmjCCAZYCAQEwgZQwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tAgEAMAkGBSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0xNzA0MDQyMjA2MzBaMCMGCSqGSIb3DQEJBDEWBBRPFwD+qCRy6R58WR3J79MqSkMx+zANBgkqhkiG9w0BAQEFAASBgBUxZMUZFEJ7bYlV0bijDGUcmaNaYBivHpc4HH6vVYaXIs3IldaPydEr/NpwJxa+gqOpJPO09wIyYwKexYp9A7q86AXrNNU1hvVj6BxukJBYxcZTlN2wnVOEspp04rGtN2ndwRLfxjuXcRuxldIMpLoNU00RaIC8ckSHsZRCEMN1-----END PKCS7-----\n\">\n<input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">\n<img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n</form>\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header text-center\">Add new store</h2>\n<form (submit)=\"onAddStoreSubmit()\">\n  <div class=\"form-group\">\n    <h5><label for=\"storeLocationInput\">Find Store</label></h5>\n    <input type=\"text\" id=\"storeLocationInput\" class=\"form-control\" placeholder=\"Enter Store name\">\n    <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [zoomControl]=\"true\">\n      <app-map></app-map>\n\n      <sebm-google-map-marker\n        [latitude]=\"marker?.lat\"\n        [longitude]=\"marker?.lng\"\n        [label]=\"marker?.label\"\n        [markerDraggable]=\"marker?.draggable\">\n\n        <sebm-google-map-info-window>\n          <!-- Fill in information about store -->\n          <p><strong>{{place?.name}}</strong></p>\n          <p>{{place?.formatted_address}}</p>\n        </sebm-google-map-info-window>\n      </sebm-google-map-marker>\n    </sebm-google-map>\n  </div>\n  <div class=\"form-group\">\n    <h5><label for=\"products\">Zero waste products</label></h5>\n    <input type=\"text\" [(ngModel)]=\"products\" name=\"products\" placeholder=\"Zero waste foods available for purchase\" class=\"form-control\">\n  </div>\n  <div class=\"form-group text-right\">\n    <button type=\"submit\" class=\"btn btn-lg btn-success\">Add Store</button>\n  </div>\n</form>\n<br/>\n<h5>Store not found on google maps? <a [routerLink]=\"['/contact']\">Contact us!</a></h5>\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1 class=\"text-center\">\n      Contact us <br/><small>Feel free to contact us</small></h1>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n      <form (submit)=\"onContactSubmit()\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"name\">\n                        Name</label>\n                    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" id=\"name\" class=\"form-control\" placeholder=\"Enter name\" required=\"required\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">\n                        Email Address</label>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-envelope\"></span>\n                        </span>\n                        <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Enter email\" required=\"required\" /></div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"subject\">\n                        Subject</label>\n                    <select id=\"subject\" [(ngModel)]=\"subject\" name=\"subject\" class=\"form-control\" required>\n                         <option *ngFor=\"let sub of subjects\" [ngValue]=\"sub\">{{ sub }}</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"name\">\n                        Message</label>\n                    <textarea name=\"message\" [(ngModel)]=\"message\" name=\"message\" id=\"message\" class=\"form-control\" rows=\"9\" cols=\"25\" required=\"required\"\n                        placeholder=\"Message\"></textarea>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <button type=\"submit\" class=\"btn btn-primary pull-right\" id=\"btnContactUs\">\n                    Send Message</button>\n            </div>\n        </div>\n      </form>\n    </div>\n    <!-- <div class=\"col-md-4\">\n        <form>\n        <legend><span class=\"glyphicon glyphicon-globe\"></span> Our office</legend>\n        <address>\n            <strong>Twitter, Inc.</strong><br>\n            795 Folsom Ave, Suite 600<br>\n            San Francisco, CA 94107<br>\n            <abbr title=\"Phone\">\n                P:</abbr>\n            (123) 456-7890\n        </address>\n        <address>\n            <strong>Full Name</strong><br>\n            <a href=\"mailto:#\">first.last@example.com</a>\n        </address>\n        </form>\n    </div> -->\n</div>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"well\">\n      <h3>Stores: <span class=\"badge\">{{allStores.length}}</span></h3>\n      <div class=\"list-group-item\" *ngFor=\"let store of allStores; let i = index\">\n        <span id=\"closeButton\"><button (click)=\"deleteStore(store.id, i)\" class=\"btn btn-danger\">X</button></span>\n        <a data-toggle=\"collapse\" [attr.data-target]=\"'#storeInfo'+i\" >{{store.name}}</a>\n        <div [attr.id]=\"'storeInfo'+i\" class=\"panel-collapse collapse\">\n          <div id=\"products\" class=\"panel-body\">\n            <span>Zero waste Products:</span>\n            <input type=\"text\" [attr.id]=\"'products'+i\" name=\"products\" value=\"{{store.products}}\" class=\"form-control\" required>\n            <button class=\"btn btn-success\" (click)=\"updateStore(store, i)\" href=\"#\">Update Store</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <div class=\"well\">\n      <h3>Messages:<span class=\"badge\">{{messages.length}}</span></h3>\n        <div *ngFor=\"let message of messages; let i = index\" class=\"list-group-item\">\n          <span id=\"closeButton\"><button (click)=\"deleteMessage(message._id, i)\" class=\"btn btn-danger\">X</button></span>\n          <a data-toggle=\"collapse\" [attr.data-target]=\"'#messageInfo'+i\" >{{message.subject}}</a>\n          <div [attr.id]=\"'messageInfo'+i\" class=\"panel-collapse collapse\">\n            <div id=\"products\" class=\"panel-body\">\n              <span>Name: {{message.name}}</span>\n              <p>Email: <a href=\"mailto:{{message.email}}\">{{message.email}}</a></p>\n              <p>Message: {{message.message}}</p>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<div class=\"clear\"></div>\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n          <p>Developed by Jason Lloyd</p>\n      </div>\n      <div class=\"col-sm-6 text-right\" style=\"padding-bottom:5px;padding-top:5px;\">\n        <a class=\"btn btn-default btn-sm btn-git\" href=\"http://github.com/thedeployguy\" id =\"githubButton\"><i class=\"fa fa-github fa-2x\"></i></a>\r\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Admin Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username:</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password:</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Login</button>\n</form>\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<sebm-google-map-marker\n  *ngFor=\"let m of allStores\"\n  [latitude]=\"m.lat\"\n  [longitude]=\"m.lng\"\n  [label]=\"\"\n  [markerDraggable]=\"false\">\n\n  <sebm-google-map-info-window>\n    <!-- Fill in information about store -->\n    <p><strong>{{m.name}}</strong></p>\n    <p><strong>Address: </strong>{{m.address}}</p>\n    <!-- <ul *ngIf=\"m.address\">\n      <li *ngFor=\"let add of m.address\">{{add}}</li>\n    </ul> -->\n    <p><strong>Zero waste products: </strong>{{m.products}}</p>\n    <a class=\"\" [routerLink]=\"['/store', m.id]\">More information</a>\n  </sebm-google-map-info-window>\n\n</sebm-google-map-marker>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n   <div class=\"container\">\n     <div class=\"navbar-header\">\n       <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n         <span class=\"sr-only\">Toggle navigation</span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n       </button>\n       <!-- <a class=\"navbar-brand\" href=\"#\">Zero waste Store Finder</a> -->\n     </div>\n     <div id=\"navbar\" class=\"collapse navbar-collapse\">\n       <ul class=\"nav navbar-nav navbar-left\">\n         <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Find a Store</a></li>\n         <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/addstore']\">Add a store</a></li>\n       </ul>\n\n       <ul class=\"nav navbar-nav navbar-right\">\n         <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/about']\">About</a></li>\n         <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/contact']\">Contact</a></li>\n         <li *ngIf=\"!authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n         <li *ngIf=\"authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n         <li *ngIf=\"authService.isLoggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n       </ul>\n     </div><!--/.nav-collapse -->\n   </div>\n </nav>\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label for=\"storeFinderInput\" class=\"col-sm-12 control-label text-center\"></label>\n  <div class=\"col-sm-12 text-center\">\n    <h4>Zero Waste Store Finder</h4>\n    <br/>\n    <input id=\"storeQueryField\" type=\"text\" name=\"storeFinderInput\" [(ngModel)]=\"query\" (ngModelChange)=\"searchStores()\" class=\"form-control text-center\" placeholder=\"Type Store name, Location or Product e.g. 'Dublin 7 or Rice'\" required>\n  </div>\n</div>\n<div id=\"stores\"  *ngIf=\"query != ''\">\n  <div class=\"row\" *ngFor=\"let store of stores\">\n    <div class=\"col-sm-offset-2 col-sm-8\">\n      <div class=\"well\">\n        <h4>{{store.name}}</h4>\n        <p>Address: {{store.address}}</p>\n        <p>Zero Waste products: {{store.products}}</p>\n        <p>{{store.openingHours[dayIndex]}}</p>\n        <a class=\"btn btn-sm btn-primary\"[routerLink]=\"['/store', store.id]\">More information</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"noResults\" class=\"text-center\" *ngIf=\"stores.length == 0 && query.length > 0\">\n  <h4>No Results found</h4>\n</div>\n<div class=\"row\">\n  <div id=\"buttons\" class=\"col-sm-12 text-center\">\n    <button id=\"mapBtn\" (click)=\"toggleMap()\" class=\"btn btn-success\">{{btnText}}</button>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"showStoresOnMap\">\n  <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [zoomControl]=\"true\">\n    <app-map></app-map>\n  </sebm-google-map>\n</div>\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"well\" *ngIf=\"store?.name\">\n      <h4>{{store.name}}</h4>\n      <p>Address: {{store.address}}</p>\n      <p>Opening Hours</p>\n      <ul>\n          <li *ngFor=\"let entry of store.openingHours\">{{entry}}</li>\n      </ul>\n      <p>Zero Waste products: {{store.products}}</p>\n      <p></p>\n      <div *ngIf=\"marker?.lat\">\n        <sebm-google-map [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [zoom]=\"zoom\" [zoomControl]=\"true\">\n          <sebm-google-map-marker\n            [latitude]=\"marker.lat\"\n            [longitude]=\"marker.lng\"\n            [label]=\"marker.label\"\n            [markerDraggable]=\"marker.draggable\">\n\n          </sebm-google-map-marker>\n        </sebm-google-map>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(410);


/***/ })

},[743]);
//# sourceMappingURL=main.bundle.map