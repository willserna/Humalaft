import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private datosGuardadosSource = new Subject<any>();
  datosGuardados$ = this.datosGuardadosSource.asObservable();

  emitirDatosGuardados(datos: any) {
    this.datosGuardadosSource.next(datos);
  }
}
