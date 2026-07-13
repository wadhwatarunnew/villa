import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-about-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-hero.component.html',
  styleUrls: ['./about-hero.component.scss']
})
export class AboutHeroComponent {
  @Input() about: any = {};
}
