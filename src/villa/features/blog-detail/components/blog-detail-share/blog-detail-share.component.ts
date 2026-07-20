import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'villa-blog-detail-share',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail-share.component.html'
})
export class BlogDetailShareComponent {
  links = [
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/thevillatents/',
      className: 'bg-[#2563eb]'
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/thevillatent/',
      className: 'bg-[#e11d48]'
    },
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/channel/UCKg87eksAdTZkMu7OB7FrSQ',
      className: 'bg-[#dc2626]'
    },
    {
      label: 'Pinterest',
      url: 'https://www.pinterest.com/thevillatent/',
      className: 'bg-[#bd081c]'
    }
  ];
}
