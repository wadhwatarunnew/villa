import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GalleryFiltersComponent } from '../../components/gallery-filters/gallery-filters.component';
import { GalleryGridComponent } from '../../components/gallery-grid/gallery-grid.component';
import { GalleryLightboxComponent } from '../../components/gallery-lightbox/gallery-lightbox.component';
import { GalleryHeroComponent } from '../../components/gallery-hero/gallery-hero.component';
import { GALLERY_CATEGORIES, GALLERY_ITEMS, GalleryCategory, GalleryItem } from '../../components/gallery-data';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({
  selector: 'villa-gallery-page',
  standalone: true,
  imports: [CommonModule, GalleryHeroComponent, GalleryFiltersComponent, GalleryGridComponent, GalleryLightboxComponent, CommonCtaComponent],
  templateUrl: './gallery-page.component.html'
})
export class GalleryPageComponent {
  tabs = GALLERY_CATEGORIES;
  activeTab: GalleryCategory = 'all';
  items = GALLERY_ITEMS;
  lightboxOpen = false;
  activeIndex = 0;

  setActiveTab(tab: string): void {
    this.activeTab = tab as GalleryCategory;
  }

  get filteredItems(): GalleryItem[] {
    return this.activeTab === 'all'
      ? this.items
      : this.items.filter(item => item.category === this.activeTab);
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
