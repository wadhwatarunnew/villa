import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadBrochureBannerComponent } from '../../components/download-brochure-banner/download-brochure-banner.component';
import { BrochureRequestFormComponent } from '../../components/brochure-request-form/brochure-request-form.component';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({
  selector: 'villa-download-brochure-page',
  standalone: true,
  imports: [CommonModule, DownloadBrochureBannerComponent, BrochureRequestFormComponent, CommonCtaComponent],
  templateUrl: './download-brochure-page.component.html'
})
export class DownloadBrochurePageComponent {}
