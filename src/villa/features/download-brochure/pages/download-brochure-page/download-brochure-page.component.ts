import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { SeoService } from '../../../../services/seo.service';
import { DownloadBrochureBannerComponent } from '../../components/download-brochure-banner/download-brochure-banner.component';
import { BrochureRequestFormComponent } from '../../components/brochure-request-form/brochure-request-form.component';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({
  selector: 'villa-download-brochure-page',
  standalone: true,
  imports: [CommonModule, DownloadBrochureBannerComponent, BrochureRequestFormComponent, CommonCtaComponent],
  templateUrl: './download-brochure-page.component.html'
})

export class DownloadBrochurePageComponent {
  pageData: any;
    
  constructor(private route: RouterModule, private seoService:SeoService) {}
  private ApiService = inject(ApiService);

  ngOnInit() {
    this.ApiService.getPage('Action=GetBrochurePage').subscribe(res => {
      this.pageData = res;
      this.seoService.setSEO(this.pageData.Data.SEOInfo);
    });
  }
}
