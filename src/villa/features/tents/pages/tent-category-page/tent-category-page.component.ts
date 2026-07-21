import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { tentCategories, tentImages } from '../../tent-collections.data';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';
import { TentCategoryHeroComponent } from '../../components/tent-category-hero/tent-category-hero.component';
import { TentProductGridComponent } from '../../components/tent-product-grid/tent-product-grid.component';

@Component({ selector: 'villa-tent-category-page', standalone: true, imports: [CommonModule, RouterModule, CommonCtaComponent, TentCategoryHeroComponent, TentProductGridComponent], templateUrl: './tent-category-page.component.html' })
export class TentCategoryPageComponent {
  readonly categories = tentCategories;
  readonly images = tentImages;
  category = tentCategories[0];
  constructor(route: ActivatedRoute) { route.paramMap.subscribe(params => this.category = tentCategories.find(item => item.slug === params.get('category')) ?? tentCategories[0]); }
}
