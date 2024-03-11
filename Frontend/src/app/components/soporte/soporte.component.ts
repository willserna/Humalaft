import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent {
  private uploadSubject = new BehaviorSubject<File | null>(null);

  // Utiliza este observable para suscribirte a eventos de carga
  upload$: Observable<void> = this.uploadSubject.pipe(
    switchMap(file => this.uploadFile(file))
  );

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log('Archivo seleccionado:', file.name);

    // Notifica al observable que se ha seleccionado un nuevo archivo
    this.uploadSubject.next(file);
  }

  private uploadFile(file: File | null): Observable<void> {
    if (!file) {
      return new Observable(); // Observable vacío si no hay archivo seleccionado
    }

    // Simula una operación asincrónica (puedes realizar tu lógica de procesamiento aquí)
    return new Observable(observer => {
      setTimeout(() => {
        console.log('Procesamiento del archivo completado:', file.name);
        observer.next();
        observer.complete();
      }, 2000); // Simulación de una operación de 2 segundos
    });
  }
}
