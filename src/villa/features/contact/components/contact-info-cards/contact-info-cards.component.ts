import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-contact-info-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-info-cards.component.html',
  styleUrls: ['./contact-info-cards.component.scss']
})
export class ContactInfoCardsComponent {
  
  @Input() siteInfo: any = {};

  get contactInfoCards() {
    return [
            {
              label: 'CALL US',
              value: this.siteInfo?.phone || '',
              href: `tel:${this.siteInfo?.phone?.replace(/\s/g, '') || ''}`,
              links: [
                {
                  label: this.siteInfo?.phone || '',
                  href: `tel:${this.siteInfo?.phone?.replace(/\s/g, '') || ''}`
                },
                {
                  label: this.siteInfo?.alternatePhone || '',
                  href: `tel:${this.siteInfo?.alternatePhone?.replace(/\s/g, '') || ''}`
                }
              ].filter(x => x.label),
              details: ['Mon - Sat: 9:30 AM - 6:30 PM'],
              fill: 'none',
              paths: [
                'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
              ]
            },
            {
              label: 'EMAIL US',
              value: this.siteInfo?.email || '',
              href: `mailto:${this.siteInfo?.email || ''}`,
              details: ['We reply within 24 hours'],
              fill: 'none',
              paths: [
                'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              ]
            },
            {
              label: 'WHATSAPP™',
              value: this.siteInfo?.whatsapp || '',
              href: `https://wa.me/${this.siteInfo?.whatsapp?.replace(/\D/g, '') || ''}`,
              details: ['Chat with us on WhatsApp'],
              fill: 'currentColor',
              paths: [
                'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606...'
              ]
            },
            {
              label: 'OUR OFFICE',
              value: this.siteInfo?.companyName || '',
              href: this.siteInfo?.mapUrl || '',
              target: '_blank',
              details: [
                this.siteInfo?.address || ''
              ],
              fill: 'none',
              paths: [
                'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
                'M15 11a3 3 0 11-6 0 3 3 0 016 0z'
              ]
            },
            {
              label: 'WORKING HOURS',
              value: this.siteInfo?.workingDays || 'Mon - Sat',
              details: [
                this.siteInfo?.workingHours || '10:00 AM - 6:30 PM',
                this.siteInfo?.holiday || 'Sunday: Closed'
              ],
              fill: 'none',
              paths: [
                'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              ]
            }
          ];
  }
}
