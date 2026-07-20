import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject, Injector, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GalleryFiltersComponent } from '../../components/gallery-filters/gallery-filters.component';
import { GalleryGridComponent } from '../../components/gallery-grid/gallery-grid.component';
import { GalleryLightboxComponent } from '../../components/gallery-lightbox/gallery-lightbox.component';
import { GalleryHeroComponent } from '../../components/gallery-hero/gallery-hero.component';
import { GALLERY_CATEGORIES, GALLERY_ITEMS, GalleryCategory, GalleryItem } from '../../components/gallery-data';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';
import { ApiService } from '../../../../services/api.service';
import { SeoService } from '../../../../services/seo.service';

@Component({
  selector: 'villa-gallery-page',
  standalone: true,
  imports: [CommonModule, GalleryHeroComponent, GalleryFiltersComponent, GalleryGridComponent, GalleryLightboxComponent, CommonCtaComponent],
  templateUrl: './gallery-page.component.html'
})
export class GalleryPageComponent {
  tabs = GALLERY_CATEGORIES;
  activeTab: GalleryCategory = 'all';
  items: GalleryItem[] = [];
  APIResponse:any = {};
  TopSection:any = {};
  lightboxOpen = false;
  activeIndex = 0;
  visibleCount = 15;

  constructor(private route: RouterModule, private seoService:SeoService) {}
  private ApiService = inject(ApiService);

  ngOnInit() {
    this.ApiService.getPage('Action=GetGalleryInfo').subscribe(res => {
      this.APIResponse = res;
      this.items  = this.APIResponse.Data;
      this.TopSection  = this.APIResponse.TopSection;
      this.tabs   = this.APIResponse.Categories;
      this.seoService.setSEO(this.APIResponse.SEOInfo);
    });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab as GalleryCategory;
    this.visibleCount = 15;
  }

  get filteredItems(): GalleryItem[] {
    return this.activeTab === 'all'
      ? this.items
      : this.items.filter(item => item.category === this.activeTab);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.visibleCount = 15;
    }
  }

  get visibleItems(): GalleryItem[] {
    return this.filteredItems.slice(0, this.visibleCount);
  }

  loadMore(): void {
    this.visibleCount += 15;
  }

  get canLoadMore(): boolean {
    return this.visibleItems.length < this.filteredItems.length;
  }

  openLightbox(index: number): void {
    this.activeIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
  }

  setLightboxIndex(index: number): void {
    this.activeIndex = index;
  }
}
