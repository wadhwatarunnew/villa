import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-home-highlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-highlight.component.html',
  styleUrls: ['./home-highlight.component.scss']
})
export class HomeHighlightComponent {
  @Input() topSection: any = {};
}
