import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-home-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-blogs.component.html',
})
export class HomeBlogsComponent {
  blogs = [
    {
      category: 'Glamping Trends',
      title: 'Top Glamping Trends Shaping the Future of Hospitality',
      date: 'May 10, 2024',
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=200&auto=format&fit=crop',
    },
    {
      category: 'Eco Tourism',
      title: 'Sustainable Tourism: Building a Better Tomorrow',
      date: 'April 28, 2024',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=200&auto=format&fit=crop',
    },
    {
      category: 'Resort Development',
      title: 'Things to Consider Before Setting Up a Resort',
      date: 'April 15, 2024',
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=200&auto=format&fit=crop',
    },
    {
      category: 'Hospitality Design',
      title: 'Designing Memorable Guest Experiences in Nature',
      date: 'April 05, 2024',
      image: 'https://images.unsplash.com/photo-1544144433-d50aff500b91?q=80&w=200&auto=format&fit=crop',
    },
  ];
}
