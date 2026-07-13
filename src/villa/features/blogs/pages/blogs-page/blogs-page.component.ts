import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { BlogsHighlightComponent } from '../../components/blogs-highlight/blogs-highlight.component';

@Component({
  selector: 'villa-blogs-page',
  standalone: true,
  imports: [CommonModule, BlogsHighlightComponent],
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss']
})
export class BlogsPageComponent {
  pageData: any;
    
  constructor(private route: RouterModule) {}
  private ApiService = inject(ApiService);

  ngOnInit() {
    this.ApiService.getPage('Action=GetBlogsPage').subscribe(res => {
      this.pageData = res;
    });
  }
}
