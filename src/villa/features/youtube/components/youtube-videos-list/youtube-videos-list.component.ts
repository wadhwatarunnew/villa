import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

export interface YoutubeVideo {
  id: string | number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  youtubeId?: string;
  videoId?: string;
  url?: string;
}

@Component({
  selector: 'villa-youtube-videos-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './youtube-videos-list.component.html',
  styleUrls: ['./youtube-videos-list.component.scss']
})
export class YoutubeVideosListComponent implements OnChanges {
  @Input() videos: any[] = [];

  readonly pageSize = 9;
  visibleVideoCount = this.pageSize;
  selectedVideo: YoutubeVideo | null = null;
  selectedVideoIndex = 0;
  isLightboxOpen = false;
  safeVideoUrl: SafeResourceUrl | null = null;

  fallbackVideos: YoutubeVideo[] = [
    { id: 1, title: 'The Raj Villa – Full Tour', description: 'Take a complete tour of The Raj Villa and explore its elegant design, spacious interiors, and premium features.', duration: '3:45', thumbnail: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80', youtubeId: 'dQw4w9WgXcQ' },
    { id: 2, title: 'Inside Our Luxury Resort Tent', description: 'Step inside and experience the comfort, space, and fine details of our luxury resort tents.', duration: '4:12', thumbnail: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80', youtubeId: 'ysz5S6PUM-U' },
    { id: 3, title: 'Manufacturing Process', description: 'See how our resort tents are designed and built with high-quality materials and precision.', duration: '5:08', thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', youtubeId: 'ScMzIvxBSi4' },
    { id: 4, title: 'Aarti Resort Tent – Overview', description: 'Explore the Aarti Resort Tent and learn about its design, features, and guest experience.', duration: '3:20', thumbnail: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80', youtubeId: 'aqz-KE-bpKQ' },
    { id: 5, title: 'Porch & Outdoor Living', description: 'Discover the open veranda and outdoor living experience that connects you with nature.', duration: '4:18', thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 6, title: 'Frame Structure & Materials', description: 'Understand the materials, frame structure, and construction quality used in our tents.', duration: '6:10', thumbnail: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80', youtubeId: 'fJ9rUzIMcZQ' },
    { id: 7, title: 'Luxury Safari Tent Experience', description: 'A scenic look at our safari-inspired tent lifestyle with premium comfort and panoramic views.', duration: '4:44', thumbnail: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80', youtubeId: '2Vv-BfVoR4g' },
    { id: 8, title: 'Crafted for Nature', description: 'A closer look at the craftsmanship and detailing behind every unique tent installation.', duration: '3:58', thumbnail: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80', youtubeId: 'v1JX9oD0E2s' },
    { id: 9, title: 'Our Design Process', description: 'From concept to installation, see how we create memorable luxury stays in natural settings.', duration: '5:22', thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', youtubeId: '5qap5aO4i9A' },
    { id: 10, title: 'Royal Heritage Details', description: 'Explore the intricate patterns, textures, and premium finishes built into each structure.', duration: '2:55', thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', youtubeId: 'e-ORhEE9VVg' },
    { id: 11, title: 'Family Stay Experience', description: 'A walkthrough of how our tents bring together luxury, comfort, and family-friendly functionality.', duration: '4:02', thumbnail: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80', youtubeId: 'tAGnKpE4NCI' },
    { id: 12, title: 'Premium Outdoor Living', description: 'See how our outdoor spaces create a relaxing, immersive resort atmosphere for every guest.', duration: '3:33', thumbnail: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80', youtubeId: 'oHg5SJYRHA0' }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videos']) {
      this.visibleVideoCount = this.pageSize;
    }
  }

  get normalizedVideos(): YoutubeVideo[] {
    return this.videos && this.videos.length ? this.normalizeVideos(this.videos) : this.fallbackVideos;
  }

  get visibleVideos(): YoutubeVideo[] {
    return this.normalizedVideos.slice(0, this.visibleVideoCount);
  }

  get hasMoreVideos(): boolean {
    return this.visibleVideoCount < this.normalizedVideos.length;
  }

  loadMore(): void {
    this.visibleVideoCount = Math.min(
      this.visibleVideoCount + this.pageSize,
      this.normalizedVideos.length
    );
  }

  get galleryVideos(): YoutubeVideo[] {
    return this.normalizedVideos;
  }

  openVideo(video: YoutubeVideo): void {
    this.selectGalleryVideo(this.galleryVideos.findIndex((item) => item.id === video.id));
    this.isLightboxOpen = true;
  }

  selectGalleryVideo(index: number): void {
    if (index < 0 || index >= this.galleryVideos.length) {
      return;
    }

    this.selectedVideoIndex = index;
    this.selectedVideo = this.galleryVideos[index];
    const videoId = this.selectedVideo.youtubeId || this.selectedVideo.videoId || this.extractVideoId(this.selectedVideo.url || '') || String(this.selectedVideo.id);
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`);
  }

  previousGalleryVideo(): void {
    const previousIndex = (this.selectedVideoIndex - 1 + this.galleryVideos.length) % this.galleryVideos.length;
    this.selectGalleryVideo(previousIndex);
  }

  nextGalleryVideo(): void {
    const nextIndex = (this.selectedVideoIndex + 1) % this.galleryVideos.length;
    this.selectGalleryVideo(nextIndex);
  }

  closeVideo(): void {
    this.isLightboxOpen = false;
    this.selectedVideo = null;
    this.safeVideoUrl = null;
    this.selectedVideoIndex = 0;
  }

  private normalizeVideos(items: any[]): YoutubeVideo[] {
    return (items || []).map((item, index) => {
      const videoId = item.youtubeId || item.videoId || item.youtube_id || item.video_id || this.extractVideoId(item.url || item.link || '');
      const thumbnail = item.thumbnail || item.image || item.img || item.cover || item.thumb || item.poster || this.fallbackVideos[index % this.fallbackVideos.length].thumbnail;

      return {
        id: item.id ?? item.videoId ?? item.youtubeId ?? `${index + 1}`,
        title: item.title || item.name || `Video ${index + 1}`,
        description: item.description || item.shortDescription || item.summary || 'Explore our latest project and behind-the-scenes details.',
        duration: item.duration || item.length || '3:45',
        thumbnail,
        youtubeId: videoId,
        videoId,
        url: item.url || item.link || ''
      };
    });
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
      if (match && match[1]) {
        return match[1];
      }
    }

    return null;
  }
}
