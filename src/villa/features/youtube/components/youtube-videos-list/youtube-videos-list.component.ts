import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

export interface Videos {
  title: string;
  url: string;
  image: string;
}

@Component({
  selector: 'villa-youtube-videos-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './youtube-videos-list.component.html',
  styleUrls: ['./youtube-videos-list.component.scss']
})
export class YoutubeVideosListComponent implements OnChanges {
  @Input() info: any = {};
  @Input() videos: Videos[] = [];

  readonly pageSize = 9;
  visibleVideoCount = this.pageSize;

  selectedVideo: Videos | null = null;
  selectedVideoIndex = 0;
  isLightboxOpen = false;
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videos']) {
      this.visibleVideoCount = this.pageSize;
    }
  }

  get visibleVideos(): Videos[] {
    return (this.videos ?? []).slice(0, this.visibleVideoCount);
  }

  get hasMoreVideos(): boolean {
    return this.visibleVideoCount < (this.videos?.length ?? 0);
  }

  loadMore(): void {
    this.visibleVideoCount = Math.min(
      this.visibleVideoCount + this.pageSize,
      this.videos.length
    );
  }

  get galleryVideos(): Videos[] {
    return this.videos ?? [];
  }

  openVideo(video: Videos): void {
    const index = this.galleryVideos.findIndex(
      item => item.url === video.url
    );

    this.selectGalleryVideo(index);
    this.isLightboxOpen = true;
  }

  selectGalleryVideo(index: number): void {
    if (index < 0 || index >= this.galleryVideos.length) {
      return;
    }

    this.selectedVideoIndex = index;
    this.selectedVideo = this.galleryVideos[index];

    const videoId = this.extractVideoId(this.selectedVideo.url);

    if (videoId) {
      this.safeVideoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`
        );
    } else {
      this.safeVideoUrl = null;
    }
  }

  previousGalleryVideo(): void {
    if (!this.galleryVideos.length) {
      return;
    }

    const previousIndex =
      (this.selectedVideoIndex - 1 + this.galleryVideos.length) %
      this.galleryVideos.length;

    this.selectGalleryVideo(previousIndex);
  }

  nextGalleryVideo(): void {
    if (!this.galleryVideos.length) {
      return;
    }

    const nextIndex =
      (this.selectedVideoIndex + 1) % this.galleryVideos.length;

    this.selectGalleryVideo(nextIndex);
  }

  closeVideo(): void {
    this.isLightboxOpen = false;
    this.selectedVideo = null;
    this.safeVideoUrl = null;
    this.selectedVideoIndex = 0;
  }

  private extractVideoId(url: string): string | null {
    if (!url) {
      return null;
    }

    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/,
      /(?:v=|be\/)([A-Za-z0-9_-]{11})/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);

      if (match?.[1]) {
        return match[1];
      }
    }

    return null;
  }
}