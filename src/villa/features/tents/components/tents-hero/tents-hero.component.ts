import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'villa-tents-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tents-hero.component.html'
})
export class TentsHeroComponent {
  @Input() topSection!: any;
}
