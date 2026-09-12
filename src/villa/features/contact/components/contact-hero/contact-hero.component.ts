import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'villa-contact-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-hero.component.html',
  styleUrls: ['./contact-hero.component.scss']
})
export class ContactHeroComponent {
  @Input() topSection: any = {};
}
