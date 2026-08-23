import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TentDetailBannerComponent } from '../../components/tent-detail-banner/tent-detail-banner.component';
import { TentOverviewComponent } from '../../components/tent-overview/tent-overview.component';
import { TentFeaturesComponent } from '../../components/tent-features/tent-features.component';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';
import { RelatedTentsSliderComponent } from '../../components/related-tents-slider/related-tents-slider.component';
import { TentImageGalleryComponent } from '../../components/tent-image-gallery/tent-image-gallery.component';

@Component({
  selector: 'villa-tent-detail-page',
  standalone: true,
  imports: [JsonPipe, TentDetailBannerComponent, TentOverviewComponent, TentFeaturesComponent, CommonCtaComponent, RelatedTentsSliderComponent, TentImageGalleryComponent],
  templateUrl: 'tent-detail-page.component.html'
})

export class TentDetailPageComponent {
  @Input() data!: any;

  constructor(route: ActivatedRoute) {}
}
