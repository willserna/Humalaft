import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProgressServiceService } from '../../services/progress.service';

@Component({
  selector: 'app-form-persona-juridica',
  templateUrl: './form-persona-juridica.component.html',
  styleUrls: ['./form-persona-juridica.component.css']
})
export class FormPersonaJuridicaComponent {
  opcion: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private progressService: ProgressServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.opcion = +params['opcion'] || 1;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  onEnviarClick() {
    const nextProgress = this.progressService.getProgress() + 1;
    if (nextProgress <= 7) {
      this.progressService.setProgress(nextProgress);
      this.router.navigate(['/formulario', nextProgress]);
    } else {
      this.router.navigate(['/exito']);
    }
  }

  onAtrasClick() {
    const currentProgress = this.progressService.getProgress();

    if (currentProgress > 1) {
      const newProgress = currentProgress - 1;
      this.progressService.setProgress(newProgress);
      this.router.navigate(['/formulario', newProgress]);
    } else {

    }
  }

}
