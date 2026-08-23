import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-project-challenge-solution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-challenge-solution.component.html'
})
export class ProjectChallengeSolutionComponent {
  @Input() challenges: any;
  @Input() solutions: any;
  @Input() projectDetails: any;
}
