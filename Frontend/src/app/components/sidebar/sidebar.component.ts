import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
 showSidebar: boolean = true;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showSidebar = !this.router.url.endsWith('/')
        && !this.router.url.endsWith('/informacion-general')
        && !this.router.url.startsWith('/form');
      }
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  selectedItems: Set<string> = new Set<string>();
  selectedSubItem: string | null = null;

  toggleItem(item: string): void {
    if (item === 'Visualizacion') {
      this.router.navigate(['/visualizacion']);
    }
    if (item === 'Soporte') {
      this.router.navigate(['/soporte']);
    }

    if (this.selectedItems.has(item)) {
      this.selectedItems.delete(item);
      this.selectedSubItem = null;
    } else {
      this.selectedItems.clear();
      this.selectedItems.add(item);
    }
  }

  isSelected(item: string): boolean {
    return this.selectedItems.has(item);
  }

  seleccionarSubItem(subItem: string): void {
    this.selectedSubItem = subItem;
  }

  isSelectedSubItem(subItem: string): boolean {
    return this.selectedSubItem === subItem;
  }

 calcularAlturaTotal(): string {
  const alturaListaPrincipal = 40;
  const alturaSublista = this.selectedSubItem ? 60 : 0;
  return `${alturaListaPrincipal + alturaSublista}px`;
}

}
