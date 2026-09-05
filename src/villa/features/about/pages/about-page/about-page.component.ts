import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { SeoService } from '../../../../services/seo.service';
import {
  AboutHeroComponent,
  AboutIntroComponent,
  AboutValuesComponent,
  AboutMissionVisionComponent,
} from '../../components';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({
  selector: 'villa-about-page',
  standalone: true,
  imports: [
    CommonModule,
    AboutHeroComponent,
    AboutIntroComponent,
    AboutValuesComponent,
    AboutMissionVisionComponent,
    CommonCtaComponent,
  ],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})

export class AboutPageComponent {
  pageData: any;
    
  constructor(private route: RouterModule, private seoService:SeoService) {}
  private ApiService = inject(ApiService);

  ngOnInit() {
    this.ApiService.getPage('Action=GetAboutPage').subscribe(res => {
      this.pageData = res;
      this.seoService.setSEO(this.pageData.Data.SEOInfo);
    });
  }
}