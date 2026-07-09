import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TentsHighlightComponent } from '../../components/tents-highlight/tents-highlight.component';

@Component({
  selector: 'villa-category-page',
  standalone: true,
  imports: [CommonModule, TentsHighlightComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryPageComponent {
  @Input() data!: any;
}
