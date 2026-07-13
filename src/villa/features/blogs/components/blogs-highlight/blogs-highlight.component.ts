import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

@Component({
  selector: 'villa-blogs-highlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs-highlight.component.html',
  styleUrls: ['./blogs-highlight.component.scss']
})
export class BlogsHighlightComponent {
  categories = ['ALL', 'GLAMPING GUIDE', 'PROJECT STORIES', 'INDUSTRY TRENDS', 'TENT CARE', 'SUSTAINABILITY'];

  selectedCategory = 'ALL';

  @Input() brands: Array<{ name: string; logo?: string }> = [];
  
  private _blogPosts: BlogPost[] = [];

  @Input()
  set blogPosts(value: any) {
    this._blogPosts = value ? Object.values(value) as BlogPost[] : [];
  }

  get blogPosts(): BlogPost[] {
    return this._blogPosts;
  }

  get filteredBlogPosts(): BlogPost[] {
    return this.selectedCategory === 'ALL'
      ? this.blogPosts
      : this.blogPosts.filter(post => post.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
