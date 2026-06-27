import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeHighlightComponent } from '../../components/home-highlight/home-highlight.component';
import { HomeAboutComponent } from '../../components/home-about/home-about.component';
import { HomeTentCollectionComponent } from '../../components/home-tent-collection/home-tent-collection.component';
import { HomeServicesComponent } from '../../components/home-services/home-services.component';
import { HomeStatsStripComponent } from '../../components/home-stats-strip/home-stats-strip.component';
import { HomeFeaturedProjectsComponent } from '../../components/home-featured-projects/home-featured-projects.component';
import { HomeBlogsComponent } from '../../components/home-blogs/home-blogs.component';
import { HomeTestimonialsComponent } from '../../components/home-testimonials/home-testimonials.component';
import { HomeContactComponent } from '../../components/home-contact/home-contact.component';

@Component({
  selector: 'villa-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HomeHighlightComponent,
    HomeAboutComponent,
    HomeTentCollectionComponent,
    HomeServicesComponent,
    HomeStatsStripComponent,
    HomeFeaturedProjectsComponent,
    HomeBlogsComponent,
    HomeTestimonialsComponent,
    HomeContactComponent,
  ],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  scrollSlider(container: HTMLElement, direction: 'left' | 'right') {
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
