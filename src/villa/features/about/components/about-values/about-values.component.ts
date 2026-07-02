import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AboutValue {
  title: string;
  description: string;
  icon: 'check' | 'pencil' | 'leaf' | 'users' | 'globe' | 'support';
}

@Component({
  selector: 'villa-about-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-values.component.html',
  styleUrls: ['./about-values.component.scss']
})
export class AboutValuesComponent {
  values: AboutValue[] = [
    {
      title: 'Quality First',
      description: 'We use premium materials and follow strict quality standards at every step.',
      icon: 'check',
    },
    {
      title: 'Custom Design',
      description: 'Every project is unique. We tailor designs to match your vision and needs.',
      icon: 'pencil',
    },
    {
      title: 'Sustainable',
      description: 'Eco-friendly materials and responsible practices for a better tomorrow.',
      icon: 'leaf',
    },
    {
      title: 'Client Focused',
      description: 'We believe in long-term relationships built on trust, transparency and support.',
      icon: 'users',
    },
    {
      title: 'Global Delivery',
      description: 'We deliver and support projects anywhere in the world, on time.',
      icon: 'globe',
    },
    {
      title: 'Support 24/7',
      description: 'Our dedicated team is always available to assist you, anytime.',
      icon: 'support',
    },
  ];
}
