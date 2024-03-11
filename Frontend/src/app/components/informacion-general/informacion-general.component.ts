import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressServiceService } from '../../services/progress.service';
import { DatosService } from '../../services/datos.service';
import { InformacionGeneral } from '../../models/informacion-general';
import { ComunicacionService } from '../../services/comunicacion.service';


@Component({
  selector: 'app-informacion-general',
  templateUrl: './informacion-general.component.html',
  styleUrls: ['./informacion-general.component.css']
})
export class InformacionGeneralComponent {
  esPersonaNatural: boolean = false;
  esPersonaJuridica: boolean = false;
  opcionSeleccionada: number = 0;

  nombre: string ='';
  documento: string ='';
  repLegal?: string ='';
  documentoRte?: string ='';
  direccion: string ='';
  pais: string ='';
  nombreContacto: string ='';
  cargo: string ='';
  cargoAct: string ='';
  correo: string ='';
  telefono: string ='';
  esPersonaPoliticaExpuesta: boolean = false;

  constructor(private router: Router, private progressService: ProgressServiceService,
    private datosService: DatosService, private comunicacionService : ComunicacionService) {}

  ngOnInit(): void {
    this.comunicacionService.opcionSeleccionada$.subscribe((opcion: number) => {
      this.opcionSeleccionada = opcion;
      console.log('Opción seleccionada en InformacionGeneralComponent:', opcion);
    });

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

  actualizarOpcionSeleccionada(event: { opcion: number, esPersonaNatural: boolean, esPersonaJuridica: boolean }) {
    console.log('Opción seleccionada:', event.opcion);
    this.opcionSeleccionada = event.opcion;
    this.esPersonaNatural = event.esPersonaNatural;
    this.esPersonaJuridica = event.esPersonaJuridica;
    console.log('esPersonaNatural:', this.esPersonaNatural);
    console.log('esPersonaJuridica:', this.esPersonaJuridica);
  }

  emitirDatosGuardados() {
    const datos: InformacionGeneral = {
      nombre: this.nombre,
      documento: this.documento,
      repLegal: this.repLegal,
      documentoRte: this.documentoRte,
      direccion: this.direccion,
      pais: this.pais,
      nombreContacto: this.nombreContacto,
      cargo: this.cargo,
      cargoAct: this.cargoAct,
      correo: this.correo,
      telefono: this.telefono,
      esPersonaPoliticaExpuesta: this.esPersonaPoliticaExpuesta,

    };
    console.log(datos);
    this.datosService.emitirDatosGuardados(datos);
  }



  }

