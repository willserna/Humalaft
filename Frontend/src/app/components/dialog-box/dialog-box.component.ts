import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressServiceService } from '../../services/progress.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  @Output() opcionSeleccionada = new EventEmitter<number>();

  seleccionarOpcion(opcion: number): void {
    console.log('Opción seleccionada en DialogBoxComponent:', opcion);
    this.opcionSeleccionada.emit(opcion);
  }
}
