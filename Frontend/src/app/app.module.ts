import { ComunicacionService } from './services/comunicacion.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VisualizacionComponent } from './components/visualizacion/visualizacion.component';
import { MatrizRiesgosComponent } from './components/matriz-riesgos/matriz-riesgos.component';
import { DiagnosticoComponent } from './components/diagnostico/diagnostico.component';
import { SegmentacionComponent } from './components/segmentacion/segmentacion.component';
import { ListasComponent } from './components/listas/listas.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { InformesComponent } from './components/informes/informes.component';
import { EvidenciaConsultasComponent } from './components/evidencia-consultas/evidencia-consultas.component';
import { AgregarActorComponent } from './components/agregar-actor/agregar-actor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PantallaEmergenteComponent } from './components/pantalla-emergente/pantalla-emergente.component';
import { GestionAlertasComponent } from './components/gestion-alertas/gestion-alertas.component';
import { InformacionGeneralComponent } from './components/informacion-general/informacion-general.component';
import { LogoutDropdownComponent } from './components/logout-dropdown/logout-dropdown.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { InformacionEconomicaComponent } from './components/informacion-economica/informacion-economica.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RepresentantesLegalesComponent } from './components/representantes-legales/representantes-legales.component';
import { AccionistasComponent } from './components/accionistas/accionistas.component';
import { ReferenciasBancariasComponent } from './components/referencias-bancarias/referencias-bancarias.component';
import { ObservacionesComponent } from './components/observaciones/observaciones.component';
import { CapacitacionesComponent } from './components/capacitaciones/capacitaciones.component';
import { FirmaComponent } from './components/firma/firma.component';
import { FormPersonaJuridicaComponent } from './components/form-persona-juridica/form-persona-juridica.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ProgressBar2Component } from './components/progress-bar2/progress-bar2.component';
import { AdjuntarDocumentosComponent } from './components/adjuntar-documentos/adjuntar-documentos.component';
import { ModalComponent } from './components/modal/modal.component';
import { FirmaEmergenteComponent } from './components/firma-emergente/firma-emergente.component';
import { DatosService } from './services/datos.service';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    InicioComponent,
    VisualizacionComponent,
    MatrizRiesgosComponent,
    DiagnosticoComponent,
    SegmentacionComponent,
    ListasComponent,
    OperacionesComponent,
    InformesComponent,
    EvidenciaConsultasComponent,
    AgregarActorComponent,
    PantallaEmergenteComponent,
    GestionAlertasComponent,
    InformacionGeneralComponent,
    LogoutDropdownComponent,
    SoporteComponent,
    DialogBoxComponent,
    InformacionEconomicaComponent,
    ProgressBarComponent,
    FormularioComponent,
    RepresentantesLegalesComponent,
    AccionistasComponent,
    ReferenciasBancariasComponent,
    ObservacionesComponent,
    CapacitacionesComponent,
    FirmaComponent,
    FormPersonaJuridicaComponent,
    UserMenuComponent,
    ProgressBar2Component,
    AdjuntarDocumentosComponent,
    ModalComponent,
    FirmaEmergenteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [DatosService,ComunicacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
