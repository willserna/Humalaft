  import { Component, EventEmitter, OnInit, Output, ViewChild, AfterViewInit  } from '@angular/core';
  import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
  import { ProgressServiceService } from '../../services/progress.service';
import { FormularioService } from '../../services/formulario.service';
import { DatosService } from '../../services/datos.service';
import { InformacionGeneralComponent } from '../informacion-general/informacion-general.component';
import { InformacionEconomicaComponent } from '../informacion-economica/informacion-economica.component';

  @Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css'],
  })
  export class FormularioComponent implements OnInit, AfterViewInit  {
    opcion: number = 1;
    mostrarFirmaEmergente: boolean = false;
    @ViewChild(InformacionGeneralComponent) informacionGeneralComponent !: InformacionGeneralComponent;
    @ViewChild(InformacionEconomicaComponent) informacionEconomicaComponent !: InformacionEconomicaComponent;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private progressService: ProgressServiceService,
      private formularioService: FormularioService,
      private datosService: DatosService
    ) {}

    ngOnInit() {
      this.route.params.subscribe((params) => {
        this.opcion = +params['opcion'] || 1;
        console.log('Opción en ngOnInit:', this.opcion);
        this.progressService.setOpcion(this.opcion);
        this.progressService.setProgress(1);


      });
    }

    ngAfterViewInit() {
      this.datosService.datosGuardados$.subscribe(datos => {
        console.log('Datos recibidos en el componente padre:', datos);
      });
    }



    onInformacionGuardada(informacion: any) {
      console.log('Información recibida del formulario hijo:', informacion);
    }

    onInformacionEconomicaGuardada(informacionEconomica: any) {
      console.log('Información económica recibida del formulario hijo:', informacionEconomica);
    }

    onEnviarClick() {
      console.log("progressService " + this.progressService.getProgress());
      const nextProgress = this.progressService.getProgress() + 1;
      console.log("nextProgress" + nextProgress);
      if (this.informacionGeneralComponent) {
        this.informacionGeneralComponent.emitirDatosGuardados();
      } else {
        console.log('Componente hijo no está definido');
      }
      if (this.informacionEconomicaComponent) {
        this.informacionEconomicaComponent.emitirInformacionEconomica();
      } else {
        console.log('Componente hijo de información económica no está definido');
      }

      if (nextProgress <= 7) {
        this.opcion = nextProgress;
        this.router.navigate(['/formulario', nextProgress]);
        this.progressService.setProgress(nextProgress);

      } else if (nextProgress >= 8) {
        this.opcion = nextProgress;
        const formularioHijoFirmado = this.formularioService.getFormularioHijoFirmado();

        if (formularioHijoFirmado) {
          console.log("Formulario firmado");
          this.router.navigate(['/exito']);
        } else {
          console.log("Formulario NO firmado");
          this.mostrarFirmaEmergente = true;
        }
      }
    }

    onAtrasClick() {
      const currentProgress = this.progressService.getProgress();

      if (currentProgress > 1) {
        const newProgress = currentProgress - 1;

        this.opcion = newProgress;

        console.log('Opción antes de navegar hacia atrás:', this.opcion);

        this.router.navigate(['/formulario', newProgress]);
        this.progressService.setProgress(newProgress);

        this.actualizarMostrarFirmaEmergente();
      }
    }

    private actualizarMostrarFirmaEmergente() {
      this.mostrarFirmaEmergente = this.opcion === 7;
    }
  }
