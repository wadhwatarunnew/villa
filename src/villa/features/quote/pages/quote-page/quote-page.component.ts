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
    {
      title: 'Need Help?',
      text: '+91 98765 43210',
      iconPath: 'M5 15a7 7 0 0114 0v2a2 2 0 01-2 2h-2v-6h4M5 15v2a2 2 0 002 2h2v-6H5'
    },
    {
      title: 'Email Us',
      text: 'info@thevillatent.com',
      iconPath: 'M4 6h16v12H4V6zm0 2l8 5 8-5'
    },
    {
      title: 'Working Hours',
      text: 'Mon - Sat: 10 AM - 7 PM',
      iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Our Location',
      text: 'Noida, Uttar Pradesh, India',
      iconPath: 'M12 21s6-5.3 6-11a6 6 0 10-12 0c0 5.7 6 11 6 11zm0-8a3 3 0 100-6 3 3 0 000 6z'
    }
  ];

  readonly projectFields = [
    { label: 'Full Name', type: 'text', placeholder: 'Enter your full name', iconPath: 'M15 7a3 3 0 11-6 0 3 3 0 016 0zM5 21a7 7 0 0114 0' },
    { label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number', iconPath: 'M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2h-1C9.7 18 6 14.3 6 8V7a2 2 0 00-2-2H3z' },
    { label: 'Email Address', type: 'email', placeholder: 'Enter your email address', iconPath: 'M4 6h16v12H4V6zm0 2l8 5 8-5' },
    { label: 'Country', type: 'select', placeholder: 'Select your country', iconPath: 'M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2-2.4 3-5.4 3-9s-1-6.6-3-9m0 18c-2-2.4-3-5.4-3-9s1-6.6 3-9M3.6 9h16.8M3.6 15h16.8' },
    { label: 'Tent Category', type: 'select', placeholder: 'Select tent category', iconPath: 'M3 20h18M5 20L12 5l7 15M9 20v-5a3 3 0 016 0v5' },
    { label: 'Project Location', type: 'text', placeholder: 'Enter project location', iconPath: 'M12 21s6-5.3 6-11a6 6 0 10-12 0c0 5.7 6 11 6 11zm0-8a3 3 0 100-6 3 3 0 000 6z' },
    { label: 'Estimated Quantity', type: 'text', placeholder: 'Enter estimated quantity', iconPath: 'M7 11a4 4 0 118 0M5 21a7 7 0 0114 0M4 7h2m12 0h2' },
    { label: 'Project Timeline', type: 'select', placeholder: 'Select timeline', iconPath: 'M7 3v3m10-3v3M4 8h16M5 5h14v16H5V5z' }
  ];

  readonly contactStrip = [
    { title: 'Need Help?', text: '+91 98765 43210', iconPath: 'M5 15a7 7 0 0114 0v2a2 2 0 01-2 2h-2v-6h4M5 15v2a2 2 0 002 2h2v-6H5' },
    { title: 'Email Us', text: 'info@thevillatent.com', iconPath: 'M4 6h16v12H4V6zm0 2l8 5 8-5' },
    { title: 'Working Hours', text: 'Mon - Sat: 10 AM - 7 PM', iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: 'Our Location', text: 'Noida, Uttar Pradesh, India', iconPath: 'M12 21s6-5.3 6-11a6 6 0 10-12 0c0 5.7 6 11 6 11zm0-8a3 3 0 100-6 3 3 0 000 6z' }
  ];
}
