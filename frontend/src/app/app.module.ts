import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreFinderComponent } from './components/homepage/homepage.component';
import { MapComponent } from './components/map/map.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { DonateComponent } from './components/donate/donate.component';
import { StoreComponent } from './components/store/store.component';

// Import our services for the application
import { BackendService } from './services/backend.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SearchHomeComponent } from './components/search-home/search-home.component';
import { SearchNavComponent } from './components/search-nav/search-nav.component';
import { SearchItemComponent } from './components/search-item/search-item.component';

// Tells angular where to direct the requests
const appRoutes: Routes = [
  {path: '', component: StoreFinderComponent},
  {path: 'search', component: SearchHomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent}, 
  {path: 'about', component: AboutComponent},
  {path: 'map', component: MapComponent},
  {path: 'donate', component: DonateComponent}, // todo: change to dropdown modal
  {path: '**', component: StoreFinderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoreFinderComponent,
    MapComponent,
    ContactComponent,
    AboutComponent,
    AddStoreComponent,
    DashboardComponent,
    LoginComponent,
    FooterComponent,
    DonateComponent,
    SearchHomeComponent,
    SearchNavComponent,
    SearchItemComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAY6CukXgRddILNPPXpJ5j8CUepn2pX7p8',
        libraries: ['places'],
        language: 'en'
    })
  ],
  providers: [BackendService, AuthService, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
