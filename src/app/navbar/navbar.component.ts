import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navToggle: boolean = false;
  isLoggedIn: boolean = false;
  constructor ( private _authService: AuthService ) {
    this._authService.userData.subscribe(() => {
      if (this._authService.userData.getValue()) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
  }
  dropDownNav() {
    this.navToggle = !this.navToggle

  }
  logOut() {
    this._authService.logout();
  }
}
