import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../../services/menu.service';
import { ApiService } from '../../../../services/api.service';
import { SeoService } from '../../../../services/seo.service';

@Component({
  selector: 'villa-projects-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  pageData: any;
  projectData: any;
  projectMetaData: any;
  projectGalleryInfo: any;
  injector!: Injector;

  constructor(private route: ActivatedRoute, private seoService:SeoService) {}
  private MenuService = inject(MenuService);
  private ApiService = inject(ApiService);

  ngOnInit() {
    this.ApiService.getPage('Action=GetProjectsPage').subscribe(res => {
      this.pageData = res;
      this.projectData = this.pageData.Data.ProjectInfo;
      this.seoService.setSEO(this.pageData.Data.SEOInfo);
    });
  }
}
