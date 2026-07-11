import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPost } from '../../../blogs/components/blog-post-list/blog-post-list.component';

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

@Component({
  selector: 'villa-blog-detail-post-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail-post-nav.component.html'
})
export class BlogDetailPostNavComponent {
  @Input() posts: BlogPost[] = [];
  @Input() currentPost: BlogPost | undefined;

  get previousPost(): BlogPost | undefined {
    return this.getSibling(-1);
  }

  get nextPost(): BlogPost | undefined {
    return this.getSibling(1);
  }

  getSlug(post: BlogPost): string {
    return slugify(post.title);
  }

  private getSibling(offset: number): BlogPost | undefined {
    if (!this.currentPost) {
      return undefined;
    }

    const index = this.posts.findIndex((post) => post.title === this.currentPost?.title);
    return this.posts[index + offset];
  }
}
