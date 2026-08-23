import { Component, Input } from '@angular/core';

@Component({ selector: 'villa-project-detail-hero', standalone: true, templateUrl: './project-detail-hero.component.html' })
export class ProjectDetailHeroComponent {
  // @Input({ required: true }) project = '';
  // @Input({ required: true }) category = '';
  // @Input({ required: true }) image = '';

  @Input() topSection: any;
}
