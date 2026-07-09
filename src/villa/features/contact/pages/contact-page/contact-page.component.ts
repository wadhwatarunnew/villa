import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ContactHeroComponent } from '../../components/contact-hero/contact-hero.component';
import { ContactInfoCardsComponent } from '../../components/contact-info-cards/contact-info-cards.component';
import { ContactLocationComponent } from '../../components/contact-location/contact-location.component';

@Component({
  selector: 'villa-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    ContactHeroComponent,
    ContactInfoCardsComponent,
    ContactFormComponent,
    ContactLocationComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {}
