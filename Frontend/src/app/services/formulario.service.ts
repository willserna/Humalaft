import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private formularioHijoFirmado: boolean = false;

  setFormularioHijoFirmado(value: boolean): void {
    this.formularioHijoFirmado = value;
  }

  getFormularioHijoFirmado(): boolean {
    return this.formularioHijoFirmado;
  }

}
