import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private router: Router) {}
  title = 'Humanlaft';

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  shouldShowHeader(): boolean {
    return this.router.url !== '/';
  }
}
