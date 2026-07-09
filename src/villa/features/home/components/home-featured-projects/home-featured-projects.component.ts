import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-home-featured-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-featured-projects.component.html',
})
export class HomeFeaturedProjectsComponent {
  defaultProjects = [
              { title: 'The Oberoi, Rajasthan', location: 'Ranthambore', image: 'https://images.unsplash.com/photo-1544144433-d50aff500b91?q=80&w=600&auto=format&fit=crop' },
              { title: 'Al Maha Resort', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600&auto=format&fit=crop' },
              { title: 'Kanha Earth Lodge', location: 'Madhya Pradesh, India', image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=600&auto=format&fit=crop' },
              { title: 'Four Seasons Resort', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=600&auto=format&fit=crop' },
              { title: 'Sonoran Resorts', location: 'Saudi Arabia', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop' },
              { title: 'Aman-i-Khas', location: 'Ranthambore, India', image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?q=80&w=600&auto=format&fit=crop' },
              { title: 'Shinta Mani Wild', location: 'Cardamom Mountains, Cambodia', image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=600&auto=format&fit=crop' },
              { title: 'Banyan Tree AlUla', location: 'AlUla, Saudi Arabia', image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600&auto=format&fit=crop' },
            ];
  
  private _defaultProjects = this.defaultProjects;

  @Input()
  set projects(value: any[] | null | undefined) {
    this._defaultProjects =
      value && value.length ? value : this.defaultProjects;
  }

  get projects(): any[] {
    return this._defaultProjects;
  }
  
  scrollSlider(container: HTMLElement, direction: 'left' | 'right') {
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
