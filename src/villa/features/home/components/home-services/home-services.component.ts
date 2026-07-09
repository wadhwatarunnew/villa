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
    { value: '30+', label: 'Years of Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '40+', label: 'Countries Served' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  services = [
    {
      title: 'Resort Tent Manufacturing',
      description: 'Custom-built luxury tents designed for premium resorts, hospitality projects, and luxury stays.',
      iconName: 'build',
    },
    {
      title: 'Eco Resort Setup',
      description: 'Complete eco-friendly glamping infrastructure solutions crafted for sustainable tourism destinations.',
      iconName: 'public',
    },
    {
      title: 'Glamping Solutions',
      description: 'Turn outdoor landscapes into luxurious glamping experiences with bespoke tent concepts and layouts.',
      iconName: 'park',
    },
    {
      title: 'Luxury Camps & Retreats',
      description: 'Elegant tented accommodations for wellness retreats, safari camps, and experiential hospitality spaces.',
      iconName: 'star',
    },
    {
      title: 'Corporate Tent Solutions',
      description: 'Premium temporary and semi-permanent structures for corporate events, exhibitions, and hospitality setups.',
      iconName: 'business_center',
    },
    {
      title: 'Adventure Projects',
      description: 'Durable and weather-resistant tent structures engineered for adventure tourism and outdoor experiences.',
      iconName: 'terrain',
    },
  ];
}
