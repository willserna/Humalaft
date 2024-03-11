import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  private opcionSeleccionadaSource = new BehaviorSubject<number>(0);

  opcionSeleccionada$ = this.opcionSeleccionadaSource.asObservable();

  emitirOpcionSeleccionada(opcion: number): void {
    this.opcionSeleccionadaSource.next(opcion);
  }
}
