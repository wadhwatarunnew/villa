import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-home-tent-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-tent-collection.component.html',
})
export class HomeTentCollectionComponent {
  tents = [
    {
      index: '01',
      title: 'Safari Tents',
      image: 'assets/images/villatent6.webp',
      description: 'Timeless designs with<br />ultimate comfort',
    },
    {
      index: '02',
      title: 'Bell Tents',
      image: 'assets/images/villatent7.webp', description: 'Classic elegance for<br />intimate getaways',
    },
    {
      index: '03',
      title: 'Resort Tents',
      image: 'assets/images/villatent8.webp', description: 'Perfect for resorts<br />& retreats',
    },
    {
      index: '04',
      title: 'Geodesic Domes',
      image: 'assets/images/villatent9.webp', description: 'Modern, strong &<br />perfect for all climates',
    },
    // {
    //   index: '05',
    //   title: 'Luxury Villas',
    //   image: 'assets/images/villatent5.webp', description: 'Spacious luxury for<br />exclusive stays',
    // },
    // {
    //   index: '06',
    //   title: 'Custom Structures',
    //   image: 'assets/images/villatent6.webp', description: 'Fully customized tents<br />tailored to your vision',
    // },
  ];
}

