import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { StoreFinderComponent } from './components/store-finder/store-finder.component';
import { ContactComponent } from './components/contact/contact.component';

import {FlashMessagesModule} from 'angular2-flash-messages';

// Import our services for the application
import {MapsService} from './services/maps.service';
import {BackendService} from './services/backend.service';
// Tells angular where to direct the requests
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'storefinder', component: StoreFinderComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StoreFinderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [MapsService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
