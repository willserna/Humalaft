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

    const nombres = [
      'Comercial/Clientes',
      'Comercial/Proveedores',
      'Gestion/Proveedores',
      'Gestion humana/Gestion humana',
      'Gerencia/Estrategia',
      'Gerencia/Otros'
  ];

    for (let i = 0; i <= 5; i++) {
      const fila = {
        factorRiesgo: nombres[i],
        riesgo0: "Texto",
        riesgo1: Math.random(),
        riesgo2: "Texto",
        riesgo3: Math.random(),
        riesgo4: "Texto"

      };
      this.tablaDatos.push(fila);
    }
}

redirectToOtroComponente() {
  this.router.navigate(['/agregar-actor']);
}

}
