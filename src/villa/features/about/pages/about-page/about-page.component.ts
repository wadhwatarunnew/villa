import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import {
  AboutHeroComponent,
  AboutIntroComponent,
  AboutStatsBannerComponent,
  AboutValuesComponent,
  AboutMissionVisionComponent,
  AboutContactComponent,
} from '../../components';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({
  selector: 'villa-about-page',
  standalone: true,
  imports: [
    CommonModule,
    AboutHeroComponent,
    AboutIntroComponent,
    AboutStatsBannerComponent,
    AboutValuesComponent,
    AboutMissionVisionComponent,
    AboutContactComponent,
    CommonCtaComponent,
  ],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  pageData: any;
    
  constructor(private route: RouterModule) {}
  private ApiService = inject(ApiService);

  ngOnInit() {
    this.ApiService.getPage('Action=GetAboutPage').subscribe(res => {
      this.pageData = res;
    });
  }
}
