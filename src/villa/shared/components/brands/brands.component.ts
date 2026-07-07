import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
})
export class BrandsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('brandCarousel', { static: true }) brandCarousel!: ElementRef<HTMLDivElement>;

  brands: Array<{ name: string; logo?: string }> = [
    { name: 'ITC Hotels', logo: 'assets/images/logos/itc-hotels.webp' },
    { name: 'Godwin Hotels', logo: 'assets/images/logos/godwin-hotels.webp' },
    { name: 'The Oberoi', logo: 'assets/images/logos/ohr.webp' },
    { name: 'Tenzinling Hotels', logo: 'assets/images/logos/tenzinling-hotels.webp' },
  ];

  brandsExtended = [...this.brands, ...this.brands, ...this.brands];

  private slideInterval?: number;
  private readonly scrollSpeed = 1;
  private readonly scrollAmount = 300;

  private autoScrollPaused = false;

  ngAfterViewInit(): void {
    const element = this.brandCarousel.nativeElement;
    this.slideInterval = window.setInterval(() => {
      if (this.autoScrollPaused) {
        return;
      }
      const segmentWidth = element.scrollWidth / 3;
      if (element.scrollLeft >= segmentWidth) {
        element.scrollLeft -= segmentWidth;
      }
      element.scrollLeft += this.scrollSpeed;
    }, 16);
  }

  pauseAutoScroll(paused: boolean): void {
    this.autoScrollPaused = paused;
  }

  scrollSlider(direction: 'left' | 'right'): void {
    this.pauseAutoScroll(true);
    const container = this.brandCarousel.nativeElement;
    const scrollAmount = direction === 'left' ? -this.scrollAmount : this.scrollAmount;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    window.setTimeout(() => this.pauseAutoScroll(false), 500);
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      window.clearInterval(this.slideInterval);
    }
  }
}
