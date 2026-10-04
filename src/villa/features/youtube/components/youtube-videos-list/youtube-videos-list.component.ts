import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface YoutubeVideos {
  title: string;
  url: string;
  image: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

@Component({
  selector: 'villa-blog-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './youtube-videos-list.component.html',
  styleUrls: ['./youtube-videos-list.component.scss']
})
export class YoutubeVideosListComponent {
  @Input() youtubeVideos: YoutubeVideos[] | null = [];
  @Input() pageInfo: any = {};

  visiblePosts: YoutubeVideos[] = [];
  itemsPerLoad = 6;

  ngOnChanges(): void {
    const posts = this.youtubeVideos ?? [];
    this.visiblePosts = posts.slice(0, this.itemsPerLoad);
  }

  loadMore(): void {
    const currentLength = this.visiblePosts.length;

    this.visiblePosts = (this.youtubeVideos ?? []).slice(
      0,
      currentLength + this.itemsPerLoad
    );
  }

  get hasMorePosts(): boolean {
    return this.visiblePosts.length < (this.youtubeVideos?.length ?? 0);
  }

  getSlug(blog: YoutubeVideos): string {
    return slugify(blog.title);
  }
}
