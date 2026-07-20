import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { BlogPost } from '../../../blogs/components/blog-post-list/blog-post-list.component';
import { BlogDetailContentComponent } from '../../components/blog-detail-content/blog-detail-content.component';
import { BrandsComponent } from '../../../../shared/components/brands/brands.component';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';
import { MenuService } from '../../../../services/menu.service';
import { ApiService } from '../../../../services/api.service';

const BLOG_POSTS: BlogPost[] = [];

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

@Component({
  selector: 'villa-blog-detail-page',
  standalone: true,
  imports: [BlogDetailContentComponent, BrandsComponent, CommonCtaComponent, CommonModule, JsonPipe],
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.scss']
})

export class BlogDetailPageComponent {
  post: BlogPost | undefined;
  blogPosts = BLOG_POSTS;
  @Input() data!: any;

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    
    this.post = BLOG_POSTS.find((post) => slugify(post.title) === slug);
  }
}
