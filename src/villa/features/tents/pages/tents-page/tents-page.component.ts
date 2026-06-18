import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TentsHighlightComponent } from '../../components/tents-highlight/tents-highlight.component';

@Component({
  selector: 'villa-tents-page',
  standalone: true,
  imports: [CommonModule, TentsHighlightComponent],
  templateUrl: './tents-page.component.html',
  styleUrls: ['./tents-page.component.scss']
})
export class TentsPageComponent {}
