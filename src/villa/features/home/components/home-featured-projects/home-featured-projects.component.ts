import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-home-featured-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-featured-projects.component.html',
})
export class HomeFeaturedProjectsComponent {
  projects = [
    { title: 'The Oberoi, Rajasthan', location: 'Ranthambore', image: 'assets/images/villatent.webp' },
    { title: 'Al Maha Resort', location: 'Dubai, UAE', image: 'assets/images/villatent.webp' },
    { title: 'Kanha Earth Lodge', location: 'Madhya Pradesh, India', image: 'assets/images/villatent.webp' },
    { title: 'Four Seasons Resort', location: 'Bali, Indonesia', image: 'assets/images/villatent.webp' },
    { title: 'Sonoran Resorts', location: 'Saudi Arabia', image: 'assets/images/villatent.webp' },
    { title: 'Aman-i-Khas', location: 'Ranthambore, India', image: 'assets/images/villatent.webp' },
    { title: 'Shinta Mani Wild', location: 'Cardamom Mountains, Cambodia', image: 'assets/images/villatent.webp' },
    { title: 'Banyan Tree AlUla', location: 'AlUla, Saudi Arabia', image: 'assets/images/villatent.webp' },
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
