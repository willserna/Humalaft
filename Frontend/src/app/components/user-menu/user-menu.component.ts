import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {
  showMenu: boolean = true;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      this.showMenu = this.router.url !== '/';
    });
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/']);
  }

}
