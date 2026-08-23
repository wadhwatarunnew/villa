import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TentImageGalleryComponent } from '../tent-image-gallery/tent-image-gallery.component';

@Component({
  selector: 'villa-tent-detail-banner',
  standalone: true,
  imports: [JsonPipe, RouterModule, TentImageGalleryComponent],
  templateUrl: './tent-detail-banner.component copy.html',
  styleUrls: ['./tent-detail-banner.component.scss']
})

export class TentDetailBannerComponent {
  @Input({ required: true }) name = '';
  @Input({ required: true }) category = '';
  @Input({ required: true }) image = '';
  @Input() images: string[] = [];
  @Input() tentDetails: any = {};
  @Input() quickInfo: any[] = [];
}
