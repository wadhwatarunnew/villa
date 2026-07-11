import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPost } from '../../../blogs/components/blog-post-list/blog-post-list.component';
import { BlogDetailHeroComponent } from '../blog-detail-hero/blog-detail-hero.component';
import { BlogDetailPostNavComponent } from '../blog-detail-post-nav/blog-detail-post-nav.component';
import { BlogDetailSectionsComponent } from '../blog-detail-sections/blog-detail-sections.component';
import { BlogDetailShareComponent } from '../blog-detail-share/blog-detail-share.component';
import { BlogDetailSidebarComponent } from '../blog-detail-sidebar/blog-detail-sidebar.component';

@Component({
  selector: 'villa-blog-detail-content',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BlogDetailHeroComponent,
    BlogDetailPostNavComponent,
    BlogDetailSectionsComponent,
    BlogDetailShareComponent,
    BlogDetailSidebarComponent
  ],
  templateUrl: './blog-detail-content.component.html',
  styleUrls: ['./blog-detail-content.component.scss']
})
export class BlogDetailContentComponent {
  @Input() post: BlogPost | undefined;
  @Input() posts: BlogPost[] = [];
}
