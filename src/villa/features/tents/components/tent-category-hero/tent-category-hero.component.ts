import { Component, Input } from '@angular/core';

@Component({ selector: 'villa-tent-category-hero', standalone: true, templateUrl: './tent-category-hero.component.html' })
export class TentCategoryHeroComponent {
  @Input({ required: true }) name = '';
  @Input({ required: true }) image = '';
}
