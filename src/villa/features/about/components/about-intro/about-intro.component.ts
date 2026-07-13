import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-about-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-intro.component.html',
  styleUrls: ['./about-intro.component.scss']
})
export class AboutIntroComponent {
  @Input() founders: any[] = [];
  @Input() about: any = {};
  @Input() stats: any = {};
}
