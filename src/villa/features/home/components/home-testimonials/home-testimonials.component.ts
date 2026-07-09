import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-home-testimonials',
  imports: [CommonModule],
  templateUrl: './home-testimonials.component.html',
})
export class HomeTestimonialsComponent {
  readonly defaultTestimonials = [
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

  private _testimonials = this.defaultTestimonials;

  @Input()
  set testimonials(value: any[] | null | undefined) {
    this._testimonials =
      value && value.length ? value : this.defaultTestimonials;
  }

  get testimonials(): any[] {
    return this._testimonials;
  }

  brands = ['THE OBEROI', 'TAJ', 'ACCOR', 'FOUR SEASONS', 'ANANTARA', 'SONEVA', 'RAFFLES'];

  scrollSlider(container: HTMLElement, direction: 'left' | 'right') {
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
