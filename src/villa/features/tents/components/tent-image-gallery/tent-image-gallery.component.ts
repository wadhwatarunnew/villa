import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'villa-tent-image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tent-image-gallery.component.html'
})

export class TentImageGalleryComponent implements OnInit, OnDestroy {

  @Input({ required: true }) name = '';
  @Input() images: string[] = [];

  activeIndex = 0;
  isFullscreen = false;

  private intervalId?: ReturnType<typeof setInterval>;
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    // Never start browser timers during SSR
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.next();
    }, 10000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

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

    this.activeIndex =
      (this.activeIndex - 1 + this.images.length)
      % this.images.length;
  }
}