import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedContactFormComponent } from '../../../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'villa-brochure-request-form',
  standalone: true,
  imports: [CommonModule, SharedContactFormComponent],
  templateUrl: './brochure-request-form.component.html'
})
export class BrochureRequestFormComponent {}
