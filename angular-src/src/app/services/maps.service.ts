import { Injectable } from '@angular/core';
import { Component, OnInit, NgZone } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { BackendService } from './backend.service';
import { AuthService } from './auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Marker } from '../interfaces/marker';
import { Store } from '../interfaces/store';
import {Observable} from "rxjs";

@Injectable()
export class MapsService {
  allStores: any = [];
  allMarkers: any = [];

  constructor(private loader: MapsAPILoader,
   private _zone: NgZone,
   private flashMessage: FlashMessagesService,
   private backendService: BackendService,
   private authService: AuthService,
   private router: Router) { }

}
