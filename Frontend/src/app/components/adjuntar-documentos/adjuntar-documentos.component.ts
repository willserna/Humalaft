import { Component } from '@angular/core';

@Component({
  selector: 'app-adjuntar-documentos',
  templateUrl: './adjuntar-documentos.component.html',
  styleUrls: ['./adjuntar-documentos.component.css']
})
export class AdjuntarDocumentosComponent {
  rectangles = [
    { id: 1, text: 'PDF formulario de conocimiento de cliente' },
    { id: 2, text: 'PDF o JPG fotocopia documento de identidad' },
    { id: 3, text: 'PDF o JPG copia de RUT' },
    { id: 4, text: 'PDF referencias comerciales' },
    { id: 5, text: 'PDF certificado bancario' },
    { id: 6, text: 'Otros documentos' }
  ];

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log('Archivo seleccionado:', file);
  }

}
