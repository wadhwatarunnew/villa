import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TentImageGalleryComponent } from '../tent-image-gallery/tent-image-gallery.component';

@Component({
  selector: 'villa-tent-detail-banner',
  standalone: true,
  imports: [RouterModule, TentImageGalleryComponent],
  templateUrl: './tent-detail-banner.component copy.html',
  styleUrls: ['./tent-detail-banner.component.scss']
})
export class TentDetailBannerComponent {
  @Input({ required: true }) name = '';
  @Input({ required: true }) category = '';
  @Input({ required: true }) image = '';
  @Input({ required: true }) images: string[] = [];
}
