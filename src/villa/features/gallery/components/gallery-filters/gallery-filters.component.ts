import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryCategoryTab } from '../gallery-data';

@Component({
  selector: 'villa-gallery-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-filters.component.html'
})
export class GalleryFiltersComponent {
  @Input() tabs: GalleryCategoryTab[] = [];
  @Input() activeTab = 'all';
  @Output() activeTabChange = new EventEmitter<string>();

  selectTab(tab: string): void {
    this.activeTabChange.emit(tab);
  }
}
