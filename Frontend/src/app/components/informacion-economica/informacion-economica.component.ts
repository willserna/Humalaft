import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { InformacionGeneral } from '../../models/informacion-general';
import { InformacionEconomica } from '../../models/informacion-economica';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-informacion-economica',
  templateUrl: './informacion-economica.component.html',
  styleUrls: ['./informacion-economica.component.css']
})
export class InformacionEconomicaComponent {
  @Output() informacionEconomicaGuardada = new EventEmitter<any>();

  opciones = ['Microempresa: 1 a 10 Trabajadores,activos totales desde 1 a 500 SMLV ',
  'Pequeña empresa: 11 a 50 Trabajadores,activos totales mas de 501 SMLV hasta 5000 SMLV',
  'Mediana empresa: 51 a 200 Trabajadores,activos totales desde 5001 SMLV hasta 15000 SMLV',
  'Gran empresa: Mas de 200 trabajadores, Activos Totales mas de 15000'];
opciones2 = ['Regimen Comun', 'Regimen Simplificado', 'Auto retenedor', 'Gran Contribuyente'];
seleccionadosOpciones2: boolean[] = Array(this.opciones2.length).fill(false);
opciones3 = ['Contado', '30 dias', '60 dias'];
seleccionadosOpciones3: boolean[] = Array(this.opciones3.length).fill(false);
opcionesClasificacion = ['Opción1', 'Opción2', 'Opción3', 'Opción4'];
seleccionadosClasificacion: boolean[] = Array(this.opcionesClasificacion.length).fill(false);


objSocial: string = '';
codCiiu: string = '';
docConst: string = '';
nroMatricula: string = '';
capital: string = '';
servicio: string = '';
fecha: Date = new Date();;
certIso: string = '';
fechaInicio: Date = new Date();;
implementado: string= '';
enProceso: boolean = false;
clasificacion: string = '';
opcionesContables: string = '';
otroContable: string = '';
condicionesPago: string = '';
otroCondicionPago: string = '';

  constructor(private router: Router,private datosService: DatosService) { }

  onCheckboxChangeOpciones2(index: number) {
    this.seleccionadosOpciones2.fill(false);
    this.seleccionadosOpciones2[index] = true;
  }

  onCheckboxChangeOpciones3(index: number) {
    this.seleccionadosOpciones3.fill(false);
    this.seleccionadosOpciones3[index] = true;
  }

  onCheckboxChangeClasificacion(index: number) {
    this.seleccionadosClasificacion.fill(false);
    this.seleccionadosClasificacion[index] = true;
  }

  emitirInformacionEconomica() {
    const informacionEconomica: InformacionEconomica = {
      objSocial: this.objSocial,
      codCiiu: this.codCiiu,
      docConst: this.docConst,
      nroMatricula: this.nroMatricula,
      capital: this.capital,
      servicio: this.servicio,
      fecha: this.fecha,
      certIso: this.certIso,
      fechaInicio: this.fechaInicio,
      implementado: this.implementado,
      enProceso: this.enProceso,
      clasificacion: this.opcionesClasificacion.find((_, i) => this.seleccionadosClasificacion[i]) || '',
      opcionesContables: this.opciones2.find((_, i) => this.seleccionadosOpciones2[i]) || '',
      otroContable: this.otroContable,
      condicionesPago: this.opciones3.find((_, i) => this.seleccionadosOpciones3[i]) || '',
      otroCondicionPago: this.otroCondicionPago
    };

    this.datosService.emitirDatosGuardados(informacionEconomica);
  }
}
