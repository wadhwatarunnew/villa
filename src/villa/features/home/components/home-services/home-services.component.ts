import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-home-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-services.component.html',
})
export class HomeServicesComponent {
  stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '40+', label: 'Countries Served' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  services = [
    {
      title: 'Resort Tent Manufacturing',
      description: 'Custom-built luxury tents designed for premium resorts, hospitality projects, and luxury stays.',
      iconPath: 'M3 21h18M12 3l9 18M12 3L3 21M12 3v18',
    },
    {
      title: 'Eco Resort Setup',
      description: 'Complete eco-friendly glamping infrastructure solutions crafted for sustainable tourism destinations.',
      iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: 'Glamping Solutions',
      description: 'Turn outdoor landscapes into luxurious glamping experiences with bespoke tent concepts and layouts.',
      iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    },
    {
      title: 'Luxury Camps & Retreats',
      description: 'Elegant tented accommodations for wellness retreats, safari camps, and experiential hospitality spaces.',
      iconPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    },
    {
      title: 'Corporate Tent Solutions',
      description: 'Premium temporary and semi-permanent structures for corporate events, exhibitions, and hospitality setups.',
      iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    },
    {
      title: 'Adventure Projects',
      description: 'Durable and weather-resistant tent structures engineered for adventure tourism and outdoor experiences.',
      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    },
    {
      title: 'Government Projects',
      description: 'Reliable large-scale tent infrastructure solutions for tourism boards, eco parks, and institutional projects.',
      iconPath: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
    },
    {
      title: 'Let\'s Build Something Extraordinary Together',
      description: 'From concept to completion, we create experiences that leave a lasting impression.',
      iconPath: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z',
    },
  ];
}
