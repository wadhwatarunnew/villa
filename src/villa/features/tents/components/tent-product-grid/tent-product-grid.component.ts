import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({ selector: 'villa-tent-product-grid', standalone: true, imports: [CommonModule, RouterModule], templateUrl: './tent-product-grid.component.html' })
export class TentProductGridComponent implements OnChanges {
  @Input({ required: true }) name = '';
  @Input({ required: true }) tents: string[] = [];
  @Input({ required: true }) images: string[] = [];
  @Input() slug = '';

  showAll = false;

  get displayedTents(): string[] {
    return this.showAll ? this.tents : this.tents.slice(0, 8);
  }

  ngOnChanges(): void {
    this.showAll = false;
  }
}
