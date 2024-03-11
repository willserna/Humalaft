import { Component, EventEmitter, Output } from '@angular/core';
import { FormularioService } from '../../services/formulario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firma-emergente',
  templateUrl: './firma-emergente.component.html',
  styleUrls: ['./firma-emergente.component.css']
})
export class FirmaEmergenteComponent {
  @Output() opcionSeleccionada = new EventEmitter<number>();
  formularioHijoFirmado: boolean = false;
  visible: boolean = true;

  constructor(private router: Router,private formularioService: FormularioService) {
    this.formularioHijoFirmado = this.formularioService.getFormularioHijoFirmado();
    console.log("En firma " + this.formularioHijoFirmado);
  }

  seleccionarOpcion(opcion: number): void {
    console.log('Opción seleccionada en DialogBoxComponent:', opcion);

    if (this.formularioHijoFirmado) {

      if (opcion === 1 || opcion === 2) {
        this.opcionSeleccionada.emit(opcion);
      }
    } else {
      if (opcion === 3) {
        this.cerrarVentana();
        this.router.navigate(['/exito']);
      } else if (opcion === 4) {
        this.redirigirAExito();
        this.cerrarVentana();
      }
    }
  }

  redirigirAExito(): void {
    this.router.navigate(['/exito']);
      this.cerrarVentana();
  }

  cerrarVentana(): void {
    this.visible = false;
  }
}
