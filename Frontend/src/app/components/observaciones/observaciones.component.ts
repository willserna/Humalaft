import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.css']
})
export class ObservacionesComponent {
  titulo = 'Observaciones y notas';
  subtitulo = 'Este espacio es para añadir o aclarar cualquier informacion que consideres';
  texto = '';
  constructor(private router: Router) { }
  submitForm() {
    console.log('Formulario enviado');
  }

  onGuardarContinuarClick() {
    this.router.navigate(['/inicio']);
  }
}
