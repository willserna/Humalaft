import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressServiceService {
  private progressSubject = new BehaviorSubject<number>(0);
  private opcionSubject = new BehaviorSubject<number>(1); // Inicializa con un valor predeterminado

  private data: any = {};

  setData(key: string, value: any) {
    this.data[key] = value;
  }

  getData(key: string): any {
    return this.data[key];
  }

  constructor() {
    this.setProgress(1);
    this.opcionSubject.subscribe(opcionValue => {
      console.log('Opcion Subject value:', opcionValue);
    });
    console.log('Opcion Subject observable:', this.opcionSubject.asObservable());
  }
  progress$ = this.progressSubject.asObservable();
  opcion$ = this.opcionSubject.asObservable();



  getProgress(): number {

    return this.progressSubject.value;
  }

  getOpcion(): number {
    return this.opcionSubject.value;
  }

  setProgress(progress: number): void {
    this.progressSubject.next(progress);
  }

  setOpcion(opcion: number): void {
    this.opcionSubject.next(opcion);
  }
}
