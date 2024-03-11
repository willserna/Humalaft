import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private router: Router) { }
  tablaDatos: any[] = [];

  ngOnInit() {
    this.generarDatosAleatorios();
  }

  generarDatosAleatorios() {
    for (let i = 1; i <= 4; i++) {
      const fila = {
        factorRiesgo: `Factor Riesgo ${i}`,
        riesgo1: Math.random(),
        riesgo2: Math.random(),
        riesgo3: Math.random(),
        riesgo4: Math.random()
      };
      this.tablaDatos.push(fila);
    }
}

redirectToOtroComponente() {
  this.router.navigate(['/agregar-actor']);
}

}
