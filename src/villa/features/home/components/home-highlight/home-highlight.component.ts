import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'villa-home-highlight',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-highlight.component.html',
  styleUrls: ['./home-highlight.component.scss']
})
export class HomeHighlightComponent {
  @Input() topSection: any = {};
}
