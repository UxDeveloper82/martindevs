import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navbarOpen = false;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
     this.navbarOpen = !this.navbarOpen;
  }

  login() {
    this.auth.googleSignIn();
  }

  logout() {
    this.auth.logout();
  }


}
