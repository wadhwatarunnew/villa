import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AboutHeroComponent,
  AboutIntroComponent,
  AboutStatsBannerComponent,
  AboutValuesComponent,
  AboutMissionVisionComponent,
  AboutContactComponent,
} from '../../components';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({
  selector: 'villa-about-page',
  standalone: true,
  imports: [
    CommonModule,
    AboutHeroComponent,
    AboutIntroComponent,
    AboutStatsBannerComponent,
    AboutValuesComponent,
    AboutMissionVisionComponent,
    AboutContactComponent,
    CommonCtaComponent,
  ],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {}
