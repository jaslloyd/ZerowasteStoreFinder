import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // TODO: Could get user location but don't want to ask too many times
  DEFAULT_LOCATION = { lat: 52, lng: 13 };

  constructor(private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('Logout successful', { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['/']);
    return false;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
