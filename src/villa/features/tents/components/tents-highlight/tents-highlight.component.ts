import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { tentCategories } from '../../tent-collections.data';

@Component({
  selector: 'villa-tents-highlight',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tents-highlight.component.html'
})
export class TentsHighlightComponent {
  @Input() resortData!: any;
  @Input() collections!: any;
}
