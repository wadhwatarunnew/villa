import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BlogPost } from '../../../blogs/components/blog-post-list/blog-post-list.component';

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

@Component({
  selector: 'villa-blog-detail-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './blog-detail-sidebar.component.html'
})
export class BlogDetailSidebarComponent {
  @Input() posts: BlogPost[] = [];
  searchTerm = '';
  categories = ['All', 'Glamping Guide', 'Project Stories', 'Industry Trends', 'Tent Care', 'Sustainability'];
  
  get recentPosts(): BlogPost[] {
    const search = this.searchTerm.trim().toLowerCase();
    if (!search) {
      return this.posts.slice(0, 5);
    }

    return this.posts
      .filter(post =>
        post.title.toLowerCase().includes(search)
      )
      .slice(0, 5);
  }

  getSlug(post: BlogPost): string {
    return slugify(post.title);
  }
}
