import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AboutHeroComponent,
  AboutIntroComponent,
  AboutStatsBannerComponent,
  AboutValuesComponent,
  AboutMissionVisionComponent,
  AboutContactComponent,
  AboutCtaBannerComponent,
} from '../../components';

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
    AboutCtaBannerComponent,
  ],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {}
