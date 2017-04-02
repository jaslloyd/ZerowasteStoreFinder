import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreFinderComponent } from './components/store-finder/store-finder.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { StoreComponent } from './components/store/store.component';
import { MapComponent } from './components/map/map.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { FlashMessagesModule } from 'angular2-flash-messages';

// Import our services for the application
import { BackendService } from './services/backend.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { FooterComponent } from './components/footer/footer.component';


// Tells angular where to direct the requests
const appRoutes: Routes = [
  {path: '', component: StoreFinderComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'addstore', component: AddStoreComponent},
  {path: 'store/:id', component: StoreComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: StoreFinderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoreFinderComponent,
    ContactComponent,
    AboutComponent,
    AddStoreComponent,
    StoreComponent,
    MapComponent,
    DashboardComponent,
    LoginComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAY6CukXgRddILNPPXpJ5j8CUepn2pX7p8',
        libraries: ['places']
    })
  ],
  providers: [BackendService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
