import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TentsHighlightComponent } from '../../components/tents-highlight/tents-highlight.component';
import { TentsHeroComponent } from '../../components/tents-hero/tents-hero.component';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({
  selector: 'villa-tents-page',
  standalone: true,
  imports: [CommonModule, TentsHeroComponent, TentsHighlightComponent, CommonCtaComponent],
  templateUrl: './tents-page.component.html'
})
export class TentsPageComponent {}
