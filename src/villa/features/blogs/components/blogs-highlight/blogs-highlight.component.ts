import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../../../blogs/components/blog-post-list/blog-post-list.component';

@Component({
  selector: 'villa-blogs-highlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs-highlight.component.html',
  styleUrls: ['./blogs-highlight.component.scss']
})

export class BlogsHighlightComponent {
  @Input() topSection: any = {};
  visibleCount = 15;
  
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['blogPosts']) {
      this.visibleCount = 15;
    }
  }

  loadMoreBlogs(): void {
    this.visibleCount += 15;
  }

  get visibleItems(): BlogPost[] {
    return this.filteredBlogPosts.slice(0, this.visibleCount);
  }

  get canLoadMore(): boolean {
    return this.visibleItems.length < this.filteredBlogPosts.length;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
