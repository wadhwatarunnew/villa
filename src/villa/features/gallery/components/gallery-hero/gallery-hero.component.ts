import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'villa-gallery-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './gallery-hero.component.html'
})
export class GalleryHeroComponent {
  @Input() topSection: any = {};
}