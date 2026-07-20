import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { GalleryItem } from '../gallery-data';

@Component({
  selector: 'villa-gallery-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-lightbox.component.html'
})
export class GalleryLightboxComponent {
  @Input() items: GalleryItem[] = [];
  @Input() activeIndex = 0;
  @Output() closed = new EventEmitter<void>();
  @Output() activeIndexChange = new EventEmitter<number>();

  get currentItem(): GalleryItem | null {
    return this.items[this.activeIndex] || null;
  }

  get previousIndex(): number {
    return this.items.length ? (this.activeIndex - 1 + this.items.length) % this.items.length : 0;
  }

  get nextIndex(): number {
    return this.items.length ? (this.activeIndex + 1) % this.items.length : 0;
  }

  close(): void {
    this.closed.emit();
  }

  prev(): void {
    this.activeIndexChange.emit(this.previousIndex);
  }

  next(): void {
    this.activeIndexChange.emit(this.nextIndex);
  }

  select(index: number): void {
    this.activeIndexChange.emit(index);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    this.prev();
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    this.next();
  }
}
