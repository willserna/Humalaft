import { Component, OnDestroy, OnInit, HostListener  } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProgressServiceService } from '../../services/progress.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  currentIndex: number = 0;
  circles: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  lineWidth: string = '0%';
    private buttonClick: boolean = false;

  nombres: string[] = ['Informacion general', 'Informacion economica', 'Representantes legales', 'Accionistas', 'Referencias bancarias', 'Observaciones', 'Firma'];

  private progressSubscription: Subscription = new Subscription();

  constructor(private progressService: ProgressServiceService, private router: Router) {}

  ngOnInit() {
    this.progressSubscription = this.progressService.progress$.subscribe(
      (progress) => {
        this.currentIndex = progress;
        this.redirectAfterProgressUpdate();
      }
    );
  }

  ngOnDestroy() {
    this.progressSubscription.unsubscribe();
  }

  getProgressBarWidth(): string {
    return this.lineWidth;
  }



  onBackClick() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.buttonClick = true;
      this.updateLineWidth();
      console.log('Back clicked. Updated line width:', this.lineWidth);
      this.progressService.setProgress(this.currentIndex);
    }
  }

  private redirectAfterProgressUpdate() {
    if (this.currentIndex >= this.circles.length) {
      this.router.navigate(['/exito']);
    }
  }

  isCircleFilled(circleIndex: number): boolean {
    return circleIndex < this.currentIndex;
  }

  onCircleClick(index: number) {
    if (index < this.circles.length) {
      this.currentIndex = index;
      this.updateLineWidth();
      console.log('Circle clicked. Updated line width:', this.lineWidth);
      this.progressService.setProgress(index);
    }
  }

  private updateLineWidth() {
    const circlePercentage = 100 / (this.circles.length - 1);
    const linePercentage = this.buttonClick ? this.currentIndex * circlePercentage : (this.currentIndex - 1) * circlePercentage;
    this.lineWidth = linePercentage + '%';
  }


@HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 100) {
      document.querySelector('.progress-bar-container')?.classList.add('scrolled');
    } else {
      document.querySelector('.progress-bar-container')?.classList.remove('scrolled');
    }
  }
}

