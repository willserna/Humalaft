import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-dropdown',
  templateUrl: './logout-dropdown.component.html',
  styleUrls: ['./logout-dropdown.component.css']
})
export class LogoutDropdownComponent {
  constructor(private router: Router) { }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/']);
  }
}
