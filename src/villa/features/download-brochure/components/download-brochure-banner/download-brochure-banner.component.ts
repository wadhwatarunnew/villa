import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'villa-download-brochure-banner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './download-brochure-banner.component.html'
})
export class DownloadBrochureBannerComponent {
  readonly brochureUrl = 'assets/files/villa-brochure.pdf';
}
