import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-project-challenge-solution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-challenge-solution.component.html'
})
export class ProjectChallengeSolutionComponent {
  readonly challenges = [
    'Extreme weather conditions ranging from hot summers to cool winters.',
    'Maintaining the royal aesthetic while ensuring modern comfort.',
    'Delivering a premium experience with eco-friendly and sustainable materials.'
  ];

  readonly solutions = [
    'Used high-quality, all-weather fabrics and insulated roofing for maximum comfort.',
    'Custom interiors with royal Rajasthani elements blended with luxury furnishings.',
    'Sustainable practices and locally sourced materials were incorporated in the project.'
  ];
}
