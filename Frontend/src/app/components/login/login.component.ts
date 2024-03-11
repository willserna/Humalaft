import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  login() {
    this.isLoggedIn = true;

    if (this.isLoggedIn) {
      this.router.navigate(['/inicio']);
    }

  }

}
