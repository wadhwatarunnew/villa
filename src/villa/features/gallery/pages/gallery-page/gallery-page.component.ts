import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryHighlightComponent } from '../../components/gallery-highlight/gallery-highlight.component';

@Component({
  selector: 'villa-gallery-page',
  standalone: true,
  imports: [CommonModule, GalleryHighlightComponent],
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {}
