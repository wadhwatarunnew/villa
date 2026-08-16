import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { tentRouteSlug } from '../../tent-collections.data';

export interface TentCats {
  name: string;
  slug: string;
  category: string;
  image: string;
  content: string;
}

@Component({ selector: 'villa-tent-product-grid', standalone: true, imports: [CommonModule, RouterModule, JsonPipe], templateUrl: './tent-product-grid.component.html' })
export class TentProductGridComponent implements OnChanges {
  // @Input({ required: true }) name = '';
  // @Input({ required: true }) tents: string[] = [];
  // @Input({ required: true }) images: string[] = [];
  // @Input() slug = '';

  showAll = false;

  // @Input() tents: any[] = [];
  @Input() tents: TentCats[] | null = [];

  visiblePosts: TentCats[] = [];
  itemsPerLoad = 8;

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

  // getSlug(tent: TentCats): string {
  //   return slugify(tent.title);
  // }

  // get displayedTents(): string[] {
  //   return this.showAll ? this.tents : this.tents.slice(0, 8);
  // }

  // ngOnChanges(): void {
  //   this.showAll = false;
  // }

  // routeSlug(tent: string): string { return tentRouteSlug(tent); }
}
