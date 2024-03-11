import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar2',
  templateUrl: './progress-bar2.component.html',
  styleUrls: ['./progress-bar2.component.css']
})
export class ProgressBar2Component {

  @Input() steps: number = 7;
  @Input() currentStep: number = 0;

  get progressWidth(): string {
    return ((this.currentStep - 1) / (this.steps - 1) * 100) + '%';
  }

  get circles(): number[] {
    return Array(this.steps).fill(0).map((_, index) => index + 1);
  }

}
