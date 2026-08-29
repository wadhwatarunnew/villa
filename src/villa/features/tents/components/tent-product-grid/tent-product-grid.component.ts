import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface TentCats {
  name: string;
  slug: string;
  category: string;
  image: string;
  content: string;
}

export interface TentTopSection {
  content: string;
}

@Component({ selector: 'villa-tent-product-grid', standalone: true, imports: [CommonModule, RouterModule, JsonPipe], templateUrl: './tent-product-grid.component.html' })
export class TentProductGridComponent implements OnChanges {

  showAll = false;
  itemsPerLoad = 8;
  @Input() tents: TentCats[] | null = [];
  @Input() topSection: TentTopSection | null = null;
  visiblePosts: TentCats[] = [];

  ngOnChanges(): void {
    const posts = this.tents ?? [];
    this.visiblePosts = posts.slice(0, this.itemsPerLoad);
  }

  loadMore(): void {
    const currentLength = this.visiblePosts.length;

    this.visiblePosts = (this.tents ?? []).slice(
      0,
      currentLength + this.itemsPerLoad
    );
  }

  get hasMorePosts(): boolean {
    return this.visiblePosts.length < (this.tents?.length ?? 0);
  }
}
