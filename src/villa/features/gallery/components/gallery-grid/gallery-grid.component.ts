import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryItem } from '../gallery-data';

@Component({
  selector: 'villa-gallery-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-grid.component.html'
})
export class GalleryGridComponent {
  @Input() items: GalleryItem[] = [];
  @Output() imageClick = new EventEmitter<number>();

  openImage(index: number): void {
    this.imageClick.emit(index);
  }
}
