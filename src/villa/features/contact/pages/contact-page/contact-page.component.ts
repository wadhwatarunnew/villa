import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHighlightComponent } from '../../components/contact-highlight/contact-highlight.component';

@Component({
  selector: 'villa-contact-page',
  standalone: true,
  imports: [CommonModule, ContactHighlightComponent],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {}
