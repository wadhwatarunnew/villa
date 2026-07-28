import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { projectCategories, projectRouteSlug } from '../../project-collections.data';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({ selector: 'villa-project-category-page', standalone: true, imports: [CommonModule, RouterModule, CommonCtaComponent], templateUrl: './project-category-page.component.html' })
export class ProjectCategoryPageComponent {
  category = projectCategories[0];
  readonly images = projectCategories;
  constructor(route: ActivatedRoute) { route.paramMap.subscribe(params => this.category = projectCategories.find(item => item.slug === params.get('category')) ?? projectCategories[0]); }
  routeSlug(project: string): string { return projectRouteSlug(project); }
}
