import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { tentRouteSlug } from '../../tent-collections.data';

@Component({ selector: 'villa-related-tents-slider', standalone: true, imports: [CommonModule, RouterModule], templateUrl: './related-tents-slider.component.html' })
export class RelatedTentsSliderComponent {
  @Input({ required: true }) category = '';
  @Input({ required: true }) slug = '';
  @Input({ required: true }) currentTent = '';
  // @Input({ required: true }) tents: string[] = [];
  @Input({ required: true }) images: string[] = [];
  @Input() tents: string[] = [];

  get relatedTents(): string[] { return this.tents.filter(tent => tent !== this.currentTent); }
  scroll(container: HTMLElement, direction: number): void { container.scrollBy({ left: direction * 340, behavior: 'smooth' }); }
  routeSlug(tent: string): string { return tentRouteSlug(tent); }
}
