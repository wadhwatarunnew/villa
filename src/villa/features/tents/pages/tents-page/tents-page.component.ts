import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../../services/menu.service';
import { ApiService } from '../../../../services/api.service';
import { SeoService } from '../../../../services/seo.service';
import { TentsHighlightComponent } from '../../components/tents-highlight/tents-highlight.component';
import { TentsHeroComponent } from '../../components/tents-hero/tents-hero.component';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({
  selector: 'villa-tents-page',
  standalone: true,
  imports: [CommonModule, TentsHeroComponent, TentsHighlightComponent, CommonCtaComponent],
  templateUrl: './tents-page.component.html'
})
export class TentsPageComponent {
  pageData: any;
  resortData: any;
  topSection: any;
  categoriesData: any;
  resortGalleryInfo: any;
  injector!: Injector;

  constructor(private route: ActivatedRoute, private seoService:SeoService) {}
  private MenuService = inject(MenuService);
  private ApiService = inject(ApiService);

  ngOnInit() {
    this.ApiService.getPage('Action=GetResortTentPage').subscribe(res => {
      this.pageData = res;
      this.topSection = this.pageData.Data.TopSection;
      this.resortData = this.pageData.Data.ResortInfo;
      this.categoriesData = this.pageData.Data.Categories;
      this.seoService.setSEO(this.pageData.Data.SEOInfo);
      this.resortGalleryInfo = this.pageData.Data.GalleryInfo;
    });
  }
}
