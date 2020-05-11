import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logStatus: boolean;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isLogged().subscribe((status) => {
      this.logStatus = status as any;
    });
  }

  logOut() {
    this.auth.emailLogout();
    alert('Logged Out');
  }
}
