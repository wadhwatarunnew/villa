import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteHighlightComponent } from '../../components/quote-highlight/quote-highlight.component';

@Component({
  selector: 'villa-quote-page',
  standalone: true,
  imports: [CommonModule, QuoteHighlightComponent],
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.scss']
})
export class QuotePageComponent {}
