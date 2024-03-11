import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressServiceService } from '../../services/progress.service';
import { ComunicacionService } from '../../services/comunicacion.service';


@Component({
  selector: 'app-agregar-actor',
  templateUrl: './agregar-actor.component.html',
  styleUrls: ['./agregar-actor.component.css']
})
export class AgregarActorComponent {
  rectanguloSeleccionado: number = 0;

  constructor(private router: Router, private progressService: ProgressServiceService , private comunicacionService : ComunicacionService)
  {
    console.log('AgregarActorComponent constructor ejecutado');
}

ngOnInit(): void {
  console.log('AgregarActorComponent ngOnInit ejecutado');
}
  seleccionarRectangulo(numero: number) {
    this.rectanguloSeleccionado = numero;
  }

  redirigir(opcion: number): void {
    this.progressService.setOpcion(opcion);
    this.comunicacionService.emitirOpcionSeleccionada(opcion);

      this.progressService.setProgress(0);
      this.router.navigate(['/formulario']);

  }
  }


