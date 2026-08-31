import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-home-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent {
  @Input() aboutSection: any = {};
  @Input() features: any = {};
}
