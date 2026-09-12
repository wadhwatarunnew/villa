import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'villa-about-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-hero.component.html',
  styleUrls: ['./about-hero.component.scss']
})
export class AboutHeroComponent {
  @Input() topSection: any = {};
  @Input() about: any = {};
}
