import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';
import { TentCategoryHeroComponent } from '../../components/tent-category-hero/tent-category-hero.component';
import { TentProductGridComponent } from '../../components/tent-product-grid/tent-product-grid.component';

@Component({ selector: 'villa-tent-category-page', standalone: true, imports: [CommonModule, RouterModule, CommonCtaComponent, TentCategoryHeroComponent, TentProductGridComponent], templateUrl: './tent-category-page.component.html' })
export class TentCategoryPageComponent {
  @Input() data: any;
  readonly pageSize = 8;
  visibleCount = this.pageSize;

  get categoryData() {
    return this.data?.Data?.Data;
  }

  get tents() {
    return this.data?.Data?.Tents ?? [];
  }
}
