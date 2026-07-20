import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { SeoService } from '../../../../services/seo.service';
import { BlogsHighlightComponent } from '../../components/blogs-highlight/blogs-highlight.component';
import { BlogPostListComponent, BlogPost } from '../../components/blog-post-list/blog-post-list.component';
import { BrandsComponent } from '../../../../shared/components/brands/brands.component';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({
  selector: 'villa-blogs-page',
  standalone: true,
  imports: [CommonModule, BlogsHighlightComponent, BlogPostListComponent, BrandsComponent, CommonCtaComponent],
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss']
})
export class BlogsPageComponent {
  pageData: any;
    
  constructor(private route: RouterModule, private seoService:SeoService) {}
  private ApiService = inject(ApiService);

  ngOnInit() {
    this.ApiService.getPage('Action=GetBlogsPage').subscribe(res => {
      this.pageData = res;
      this.seoService.setSEO(this.pageData.Data.SEOInfo);
    });
  }
}
