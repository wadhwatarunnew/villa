import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogPost } from '../../../youtube/components/youtube-videos-list/youtube-videos-list.component';

@Component({
  selector: 'villa-youtube-highlight',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './youtube-highlight.component.html',
  styleUrls: ['./youtube-highlight.component.scss']
})

export class YoutubeHighlightComponent {
  @Input() topSection: any = {};
}
