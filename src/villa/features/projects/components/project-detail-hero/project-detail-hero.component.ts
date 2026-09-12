import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({ selector: 'villa-project-detail-hero', standalone: true, imports: [CommonModule, RouterModule], templateUrl: './project-detail-hero.component.html' })
export class ProjectDetailHeroComponent {
  // @Input({ required: true }) project = '';
  // @Input({ required: true }) category = '';
  // @Input({ required: true }) image = '';

  @Input() topSection: any;
}
