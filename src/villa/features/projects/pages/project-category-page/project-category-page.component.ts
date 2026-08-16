import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { projectCategories, projectRouteSlug } from '../../project-collections.data';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({ selector: 'villa-project-category-page', standalone: true, imports: [CommonModule, RouterModule, CommonCtaComponent], templateUrl: './project-category-page.component.html' })
export class ProjectCategoryPageComponent {
  readonly pageSize = 8;
  category = projectCategories[0];
  readonly images = projectCategories;
  visibleCount = this.pageSize;

  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe(params => {
      this.category = projectCategories.find(item => item.slug === params.get('category')) ?? projectCategories[0];
      this.visibleCount = this.pageSize;
    });
  }

  get displayedProjects(): string[] {
    return this.category.projects.slice(0, this.visibleCount);
  }

  get hasMoreProjects(): boolean {
    return this.visibleCount < this.category.projects.length;
  }

  loadMore(): void {
    this.visibleCount += this.pageSize;
  }

  routeSlug(project: string): string { return projectRouteSlug(project); }
}
