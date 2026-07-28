import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { matchesTentRoute, tentCategories, tentImages, tentRouteSlug } from '../../tent-collections.data';
import { TentDetailBannerComponent } from '../../components/tent-detail-banner/tent-detail-banner.component';
import { TentOverviewComponent } from '../../components/tent-overview/tent-overview.component';
import { TentFeaturesComponent } from '../../components/tent-features/tent-features.component';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';
import { RelatedTentsSliderComponent } from '../../components/related-tents-slider/related-tents-slider.component';
import { TentImageGalleryComponent } from '../../components/tent-image-gallery/tent-image-gallery.component';

@Component({ selector: 'villa-tent-detail-page', standalone: true, imports: [TentDetailBannerComponent, TentOverviewComponent, TentFeaturesComponent, CommonCtaComponent, RelatedTentsSliderComponent, TentImageGalleryComponent], templateUrl: './tent-detail-page.component.html' })
export class TentDetailPageComponent {
  category = tentCategories[0];
  tent = this.category.tents[0];
  image = tentImages[0];
  readonly images = tentImages;
  constructor(route: ActivatedRoute, router: Router) {
    route.paramMap.subscribe(params => {
      this.category = tentCategories.find(item => item.slug === params.get('category')) ?? tentCategories[0];
      const tentParam = params.get('tent') ?? '';
      this.tent = this.category.tents.find(item => matchesTentRoute(item, tentParam)) ?? this.category.tents[0];
      this.image = tentImages[this.category.tents.indexOf(this.tent) % tentImages.length];
      const canonicalTent = tentRouteSlug(this.tent);
      if (tentParam !== canonicalTent) router.navigate(['/tents', this.category.slug, canonicalTent], { replaceUrl: true });
    });
  }
}
