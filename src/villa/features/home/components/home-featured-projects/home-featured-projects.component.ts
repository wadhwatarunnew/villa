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
    { title: 'The Oberoi, Rajasthan', location: 'Ranthambore', image: 'assets/images/villatent4.webp' },
    { title: 'Al Maha Resort', location: 'Dubai, UAE', image: 'assets/images/villatent5.webp' },
    { title: 'Kanha Earth Lodge', location: 'Madhya Pradesh, India', image: 'assets/images/villatent6.webp' },
    { title: 'Four Seasons Resort', location: 'Bali, Indonesia', image: 'assets/images/villatent7.webp' },
    { title: 'Sonoran Resorts', location: 'Saudi Arabia', image: 'assets/images/villatent1.webp' },
    { title: 'Aman-i-Khas', location: 'Ranthambore, India', image: 'assets/images/villatent3.webp' },
    { title: 'Shinta Mani Wild', location: 'Cardamom Mountains, Cambodia', image: 'assets/images/villatent8.webp' },
    { title: 'Banyan Tree AlUla', location: 'AlUla, Saudi Arabia', image: 'assets/images/villatent9.webp' },
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
