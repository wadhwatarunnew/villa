import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHighlightComponent } from '../../components/about-highlight/about-highlight.component';

@Component({
  selector: 'villa-about-page',
  standalone: true,
  imports: [CommonModule, AboutHighlightComponent],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {}
