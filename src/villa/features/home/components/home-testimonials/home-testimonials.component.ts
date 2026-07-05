import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-home-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-testimonials.component.html',
})
export class HomeTestimonialsComponent {
  testimonials = [
    {
      quote: 'The Villa Tent delivered beyond our expectations. The quality, design and comfort of their tents elevated our guest experience.',
      name: 'Rajiv Kapoor',
      role: 'General Manager, The Oberoi, Rajasthan',
      brand: 'The Oberoi',
    },
    {
      quote: 'Outstanding craftsmanship and attention to detail. Our guests love the luxury glamping experience.',
      name: 'Sarah Williams',
      role: 'Resort Owner, Bali',
      brand: 'Four Seasons',
    },
    {
      quote: 'Professional team, on-time delivery and excellent after-sales support. Highly recommended!',
      name: 'Ahmed Al Farsi',
      role: 'Operations Manager, Al Maha Resort',
      brand: 'Al Maha',
    },
  ];

  brands: Array<{ name: string; logo?: string }> = [
    { name: 'ITC Hotels', logo: 'assets/images/logos/itc-hotels.webp' },
    { name: 'Godwin Hotels', logo: 'assets/images/logos/godwin-hotels.webp' },
    { name: 'The Oberoi', logo: 'assets/images/logos/ohr.webp' },
    { name: 'Tenzinling Hotels', logo: 'assets/images/logos/tenzinling-hotels.webp' },
  ];

  scrollSlider(container: HTMLElement, direction: 'left' | 'right') {
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
