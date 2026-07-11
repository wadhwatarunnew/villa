import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

@Component({
  selector: 'villa-blog-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent {
  @Input() blogPosts: BlogPost[] = [];

  getSlug(blog: BlogPost): string {
    return slugify(blog.title);
  }
}
