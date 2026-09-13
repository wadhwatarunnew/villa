import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({ selector: 'villa-tent-image-gallery', standalone: true, imports: [CommonModule], templateUrl: './tent-image-gallery.component.html' })
export class TentImageGalleryComponent implements OnInit, OnDestroy {
  // @Input({ required: true }) images: string[] = [];
  @Input({ required: true }) name = '';

  @Input() images: string[] = [];
  activeIndex = 0;
  isFullscreen = false;
  private intervalId?: ReturnType<typeof setInterval>;
  ngOnInit(): void { this.intervalId = setInterval(() => this.next(), 10000); }
  ngOnDestroy(): void { if (this.intervalId) clearInterval(this.intervalId); }
  
  select(index: number): void {
    if (!this.images?.length) {
      return;
    }

    this.activeIndex = index;
  }

  next(): void {
    if (!this.images?.length) {
      return;
    }
    
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  previous(): void {
    if (!this.images?.length) {
      return;
    }

    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }
}
