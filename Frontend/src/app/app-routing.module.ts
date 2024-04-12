import { EvidenciaConsultasComponent } from './components/evidencia-consultas/evidencia-consultas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VisualizacionComponent } from './components/visualizacion/visualizacion.component';
import { MatrizRiesgosComponent } from './components/matriz-riesgos/matriz-riesgos.component';
import { DiagnosticoComponent } from './components/diagnostico/diagnostico.component';
import { SegmentacionComponent } from './components/segmentacion/segmentacion.component';
import { ListasComponent } from './components/listas/listas.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { InformesComponent } from './components/informes/informes.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AgregarActorComponent } from './components/agregar-actor/agregar-actor.component';
import { GestionAlertasComponent } from './components/gestion-alertas/gestion-alertas.component';
import { InformacionGeneralComponent } from './components/informacion-general/informacion-general.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { InformacionEconomicaComponent } from './components/informacion-economica/informacion-economica.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RepresentantesLegalesComponent } from './components/representantes-legales/representantes-legales.component';
import { AccionistasComponent } from './components/accionistas/accionistas.component';
import { ReferenciasBancariasComponent } from './components/referencias-bancarias/referencias-bancarias.component';
import { ObservacionesComponent } from './components/observaciones/observaciones.component';
import { FirmaComponent } from './components/firma/firma.component';
import { FormPersonaJuridicaComponent } from './components/form-persona-juridica/form-persona-juridica.component';
import { AdjuntarDocumentosComponent } from './components/adjuntar-documentos/adjuntar-documentos.component';
import { FirmaEmergenteComponent } from './components/firma-emergente/firma-emergente.component';



const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent,
    children: [
      { path: '', redirectTo: '1', pathMatch: 'full' },
      { path: '1', component: InformacionGeneralComponent },
      { path: '2', component: InformacionEconomicaComponent },
      { path: '3', component: RepresentantesLegalesComponent },
      { path: '4', component: AccionistasComponent },
      { path: '5', component: ReferenciasBancariasComponent },
      { path: '6', component: ObservacionesComponent },
      { path: '7', component: FirmaComponent },
      { path: '8', component: FirmaEmergenteComponent },
    ]
  },
  {
    path: 'form-persona-juridica',
    component: FormPersonaJuridicaComponent,
    children: [
      { path: '', redirectTo: '1', pathMatch: 'full' },
      { path: '1', component: InformacionGeneralComponent },
      { path: '2', component: InformacionEconomicaComponent },
      { path: '3', component: RepresentantesLegalesComponent },
      { path: '4', component: AccionistasComponent },
      { path: '5', component: ReferenciasBancariasComponent },
      { path: '6', component: ObservacionesComponent },
      { path: '7', component: FirmaComponent },
      { path: '8', component: FirmaEmergenteComponent },
    ]
  },
  { path: 'progress', component: ProgressBarComponent },
  { path: 'visualizacion', component: VisualizacionComponent },
  { path: 'soporte', component: SoporteComponent },
  { path: 'evidencia-consultas', component: EvidenciaConsultasComponent },
  { path: 'gestion-alertas', component: GestionAlertasComponent },
  { path: 'agregar-actor', component: AgregarActorComponent },
  { path: 'informes', component: InformesComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', component: LoginComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'diagnostico', component: DiagnosticoComponent},
  { path: 'segmentacion', component: SegmentacionComponent},
  { path: 'listas', component: ListasComponent},
  { path: 'operaciones', component: OperacionesComponent},
  { path: 'matriz-riesgos', component: MatrizRiesgosComponent },
  { path: 'exito', component: AdjuntarDocumentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

