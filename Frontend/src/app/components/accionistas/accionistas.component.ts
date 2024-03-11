import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressServiceService } from '../../services/progress.service';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-accionistas',
  templateUrl: './accionistas.component.html',
  styleUrls: ['./accionistas.component.css']
})
export class AccionistasComponent {
  esPersonaNatural: boolean = false;
  esPersonaJuridica: boolean = false;
  opcionSeleccionada: number = 0;

  constructor(private router: Router, private progressService: ProgressServiceService,private comunicacionService : ComunicacionService) { }

  tableHeaders = ['Nombre/Razon Social', 'Tipo de ID', 'Numero de Identificación', 'Nacionalidad', 'PEPs' , '% Propiedad accionaria'];
  tableData: any[] = [];

  ngOnInit() {
    this.comunicacionService.opcionSeleccionada$.subscribe((opcion: number) => {
      this.opcionSeleccionada = opcion;
      console.log('Opción seleccionada en InformacionGeneralComponent:', opcion);
    });
    for (let i = 0; i < 4; i++) {
      this.addRow();
    }
  }

  isPersonaNatural(): boolean{
    return this.opcionSeleccionada === 1;
  }

  isPersonaJuridica(): boolean{
    return this.opcionSeleccionada === 2;

  }

  actualizarOpcion(opcion: number): void {
    this.opcionSeleccionada = opcion;
  }

  addRow() {
    const newRow: { [key: string]: string } = {};
    this.tableHeaders.forEach(header => {
      newRow[header] = '';
    });
    this.tableData.push(newRow);

    if (this.tableData.length % 4 === 0) {
      this.addRow();
    }
  }


  submitForm() {
    console.log('Formulario enviado');
  }

  onGuardarContinuarClick() {
    this.router.navigate(['/inicio']);
  }

  actualizarOpcionSeleccionada(event: { opcion: number, esPersonaNatural: boolean, esPersonaJuridica: boolean }) {
    console.log('Opción seleccionada:', event.opcion);
    this.opcionSeleccionada = event.opcion;
    this.esPersonaNatural = event.esPersonaNatural;
    this.esPersonaJuridica = event.esPersonaJuridica;

  }


}
