import { Component, EventEmitter, Output } from '@angular/core';
import { FormularioService } from '../../services/formulario.service';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.css']
})
export class FirmaComponent {
  firmaRealizada: boolean = false;

  constructor(private formularioService: FormularioService) {}

  onFirmarClick() {
    this.firmaRealizada = !this.firmaRealizada;
    this.formularioService.setFormularioHijoFirmado(true);
  }
}
