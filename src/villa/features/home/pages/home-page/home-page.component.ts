import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHighlightComponent } from '../../components/home-highlight/home-highlight.component';

@Component({
  selector: 'villa-home-page',
  standalone: true,
  imports: [CommonModule, HomeHighlightComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}
