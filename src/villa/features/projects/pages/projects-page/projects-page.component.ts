import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../../services/menu.service';
import { ApiService } from '../../../../services/api.service';
import { SeoService } from '../../../../services/seo.service';
import { ProjectsHighlightComponent } from '../../components/projects-highlight/projects-highlight.component';
import { RouterModule } from '@angular/router';
import { projectCategories } from '../../project-collections.data';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({
  selector: 'villa-projects-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectsHighlightComponent, CommonCtaComponent],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  pageData: any;
  projectData: any;
  projectMetaData: any;
  projectGalleryInfo: any;
  injector!: Injector;
  readonly categories = projectCategories;

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
