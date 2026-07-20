import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../blogs/components/blog-post-list/blog-post-list.component';

@Component({
  selector: 'villa-blog-detail-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail-hero.component.html'
})
export class BlogDetailHeroComponent {
  @Input({ required: true }) post!: BlogPost;
}
