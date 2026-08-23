import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { SeoService } from '../../../../services/seo.service';
import { environment } from '../../../../../../src/environments/environment';

@Component({
  selector: 'villa-terms-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './terms-page.component.html'
})

export class TermsPageComponent {
  private ApiService = inject(ApiService);
  pageData: any;
  topSection: any;
  pageInfo: any;

  constructor(private route: RouterModule, private seoService:SeoService) {}

  ngOnInit() {
    this.ApiService.getPage('Action=GetTermsPage').subscribe(res => {
      this.pageData = res;
      this.topSection = this.pageData.Data.TopSection;
      this.pageInfo = this.pageData.Data.Data;
      this.seoService.setSEO(this.pageData.Data.SEOInfo);
    });
  }
}
