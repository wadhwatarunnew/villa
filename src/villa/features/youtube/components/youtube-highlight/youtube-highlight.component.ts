import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
