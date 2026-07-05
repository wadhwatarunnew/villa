import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
})
export class BrandsComponent {
  brands: Array<{ name: string; logo?: string }> = [
    { name: 'ITC Hotels', logo: 'assets/images/logos/itc-hotels.webp' },
    { name: 'Godwin Hotels', logo: 'assets/images/logos/godwin-hotels.webp' },
    { name: 'The Oberoi', logo: 'assets/images/logos/ohr.webp' },
    { name: 'Tenzinling Hotels', logo: 'assets/images/logos/tenzinling-hotels.webp' },
  ];
}
