import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { projectCategories, projectRouteSlug } from '../../project-collections.data';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({ selector: 'villa-project-category-page', standalone: true, imports: [CommonModule, RouterModule, CommonCtaComponent], templateUrl: './project-category-page.component.html' })
export class ProjectCategoryPageComponent {
  @Input() data: any;
  readonly pageSize = 8;
  visibleCount = this.pageSize;

  get categoryData() {
    return this.data?.Data?.Data;
  }

  get projects() {
    return this.data?.Data?.Projects ?? [];
  }

  get displayedProjects() {
    return this.projects.slice(0, this.visibleCount);
  }

  get hasMoreProjects(): boolean {
    return this.visibleCount < this.projects.length;
  }

  loadMore(): void {
    this.visibleCount += this.pageSize;
  }
}
