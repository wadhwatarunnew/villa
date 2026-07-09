import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../../services/menu.service';
import { ApiService } from '../../../../services/api.service';
import { ProjectsHighlightComponent } from '../../components/projects-highlight/projects-highlight.component';

@Component({
  selector: 'villa-tents-page',
  imports: [CommonModule, ProjectsHighlightComponent],
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})

export class ProjectPageComponent {
  pageData: any;
  projectData: any;
  projectMetaData: any;
  projectGalleryInfo: any;
  injector!: Injector;

  constructor(private route: ActivatedRoute) {}
  private MenuService = inject(MenuService);
  private ApiService = inject(ApiService);

  ngOnInit() {
    this.ApiService.getPage('Action=GetProjectsPage').subscribe(res => {
      this.pageData = res;
      this.projectData = this.pageData.Data.ProjectInfo;
      this.projectMetaData = this.pageData.Data.SEOInfo;
      this.projectGalleryInfo = this.pageData.Data.GalleryInfo;
    });
  }
}
