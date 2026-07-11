import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../../blogs/components/blog-post-list/blog-post-list.component';
import { BlogDetailContentComponent } from '../../components/blog-detail-content/blog-detail-content.component';
import { BrandsComponent } from '../../../../shared/components/brands/brands.component';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

const BLOG_POSTS: BlogPost[] = [
  {
    category: 'GLAMPING GUIDE',
    title: 'What Makes Luxury Tents Perfect For Five Star Resorts?',
    excerpt: 'Discover how luxury tents combine comfort, nature, and elegance to create unforgettable guest experiences.',
    image: 'assets/images/villatent.webp',
    date: 'May 15, 2024',
    readTime: '5 Min Read'
  },
  {
    category: 'PROJECT STORIES',
    title: 'Inside Our Project at Oberoi Rajgarh Palace',
    excerpt: 'A closer look at our luxury tent installation at Oberoi Rajgarh Palace, Khajuraho.',
    image: 'assets/images/villatent.webp',
    date: 'May 08, 2024',
    readTime: '6 Min Read'
  },
  {
    category: 'INDUSTRY TRENDS',
    title: 'Top Glamping Trends Shaping 2024',
    excerpt: 'From sustainable materials to true luxury stays, explore the top glamping trends of the year.',
    image: 'assets/images/villatent.webp',
    date: 'Apr 28, 2024',
    readTime: '8 Min Read'
  },
  {
    category: 'TENT CARE',
    title: 'How to Maintain Your Luxury Tents',
    excerpt: 'Simple tips to keep your tents in perfect condition for years and ensure guest comfort.',
    image: 'assets/images/villatent.webp',
    date: 'Apr 20, 2024',
    readTime: '4 Min Read'
  },
  {
    category: 'SUSTAINABILITY',
    title: 'Sustainable Luxury: Our Commitment to Nature',
    excerpt: 'Learn how we build eco-friendly tents without compromising on luxury and durability.',
    image: 'assets/images/villatent.webp',
    date: 'Apr 12, 2024',
    readTime: '3 Min Read'
  },
  {
    category: 'PROJECT STORIES',
    title: 'Banyan Tree AlUla - A Luxury Desert Escape',
    excerpt: 'Crafting a unique glamping experience in the heart of AlUla\'s breathtaking desert landscape.',
    image: 'assets/images/villatent.webp',
    date: 'Apr 10, 2024',
    readTime: '5 Min Read'
  }
];

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

@Component({
  selector: 'villa-blog-detail-page',
  standalone: true,
  imports: [BlogDetailContentComponent, BrandsComponent, CommonCtaComponent],
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.scss']
})
export class BlogDetailPageComponent {
  post: BlogPost | undefined;
  blogPosts = BLOG_POSTS;

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.post = BLOG_POSTS.find((post) => slugify(post.title) === slug);
  }
}
