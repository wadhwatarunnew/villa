import { Component, Input } from '@angular/core';

@Component({
  selector: 'villa-tents-hero',
  standalone: true,
  templateUrl: './tents-hero.component.html'
})
export class TentsHeroComponent {
  @Input() resortData!: any;
}
