import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { SeoService } from '../../../../services/seo.service';
import { YoutubeHighlightComponent } from '../../components/youtube-highlight/youtube-highlight.component';
// import { YoutubeVideosListComponent } from '../../components/youtube-videos-list/youtube-videos-list.component';
import { BrandsComponent } from '../../../../shared/components/brands/brands.component';
// import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({
  selector: 'villa-youtube-page',
  standalone: true,
  imports: [CommonModule, YoutubeHighlightComponent, BrandsComponent],
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.scss']
})
export class YoutubePageComponent {
  pageData: any;
    
  constructor(private route: RouterModule, private seoService:SeoService) {}
  private ApiService = inject(ApiService);

  ngOnInit() {
    this.ApiService.getPage('Action=GetYoutubePage').subscribe(res => {
      this.pageData = res;
      this.seoService.setSEO(this.pageData.Data.SEOInfo);
    });
  }
}
