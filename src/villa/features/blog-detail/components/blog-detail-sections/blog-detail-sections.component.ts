import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BlogDetailSection {
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'villa-blog-detail-sections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail-sections.component.html'
})
export class BlogDetailSectionsComponent {
  sections: BlogDetailSection[] = [
    {
      title: 'Immersive Nature Experience',
      copy: 'Luxury tents bring guests closer to nature while providing the same comfort as a high-end hotel. Wake up to the sound of birds, breathe fresh air, and enjoy stunning views.',
      image: 'assets/images/villatent1.webp',
      imageAlt: 'Luxury tent interior'
    },
    {
      title: 'Elegant Design & Premium Comfort',
      copy: 'From spacious interiors and en-suite bathrooms to climate control and designer furniture, every detail is crafted to deliver unmatched luxury.',
      image: 'assets/images/villatent2.webp',
      imageAlt: 'Premium tent bedroom'
    },
    {
      title: 'Sustainable & Eco-Friendly',
      copy: 'Our tents are built with eco-conscious materials and sustainable practices, ensuring minimal impact on the environment.',
      image: 'assets/images/villatent3.webp',
      imageAlt: 'Eco-friendly luxury tent'
    },
    {
      title: 'Flexible & Customizable',
      copy: 'Every property is unique. Our tents are fully customizable to match your brand, location, and guest expectations.',
      image: 'assets/images/villatent4.webp',
      imageAlt: 'Custom luxury tent beside mountains'
    }
  ];
}
