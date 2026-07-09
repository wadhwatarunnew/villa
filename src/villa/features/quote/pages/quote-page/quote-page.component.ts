import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'villa-quote-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.scss']
})
export class QuotePageComponent {
  readonly whyChooseItems = [
    { title: 'Need Help?', text: '+91 98136 27021', link: 'tel:+9198136 27021', iconName: 'call' },
    { title: 'Email Us', text: 'info@thevillatent.com', link: 'mailto:info@thevillatent.com', iconName: 'email' },
    { title: 'Working Hours', text: 'Mon - Sat: 10 AM - 7 PM', link: null, iconName: 'schedule' },
    { title: 'Our Location', text: 'The Vedanta International Dhulkot,Behind Kingfisher,Vedanta Street, Ambala City -134003. Haryana, India.', link: 'https://maps.app.goo.gl/Xgxp1b7sZWSW3TGN8', iconName: 'place' }
  ];

  readonly projectFields = [
    { label: 'Full Name', type: 'text', placeholder: 'Enter your full name', iconName: 'person' },
    { label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number', iconName: 'call' },
    { label: 'Email Address', type: 'email', placeholder: 'Enter your email address', iconName: 'email' },
  ];

  readonly contactStrip = [
    { title: 'Need Help?', text: '+91 98765 43210', link: 'tel:+919876543210', iconName: 'call' },
    { title: 'Email Us', text: 'info@thevillatent.com', link: 'mailto:info@thevillatent.com', iconName: 'email' },
    { title: 'Working Hours', text: 'Mon - Sat: 10 AM - 7 PM', link: null, iconName: 'schedule' },
    { title: 'Our Location', text: 'Noida, Uttar Pradesh, India', link: 'https://maps.google.com/?q=Noida+Uttar+Pradesh+India', iconName: 'place' }
  ];
}
