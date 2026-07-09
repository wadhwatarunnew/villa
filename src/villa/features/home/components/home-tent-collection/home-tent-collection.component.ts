import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-home-tent-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-tent-collection.component.html',
})
export class HomeTentCollectionComponent {

  defaultTents = [
                  {
                    index: '01',
                    title: 'Safari Tents',
                    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop',
                    description: 'Timeless designs with<br />ultimate comfort',
                  },
                  {
                    index: '02',
                    title: 'Bell Tents',
                    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600&auto=format&fit=crop',
                    description: 'Classic elegance for<br />intimate getaways',
                  },
                  {
                    index: '03',
                    title: 'Resort Tents',
                    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop',
                    description: 'Perfect for resorts<br />& retreats',
                  },
                  {
                    index: '04',
                    title: 'Geodesic Domes',
                    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=600&auto=format&fit=crop',
                    description: 'Modern, strong &<br />perfect for all climates',
                  },
                  {
                    index: '05',
                    title: 'Luxury Villas',
                    image: 'https://images.unsplash.com/photo-1544144433-d50aff500b91?q=80&w=600&auto=format&fit=crop',
                    description: 'Spacious luxury for<br />exclusive stays',
                  },
                  {
                    index: '06',
                    title: 'Custom Structures',
                    image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?q=80&w=600&auto=format&fit=crop',
                    description: 'Fully customized tents<br />tailored to your vision',
                  },
                ];

    private _defaultTents = this.defaultTents;

    @Input()
    set tents(value: any[] | null | undefined) {
      this._defaultTents =
        value && value.length ? value : this.defaultTents;
    }

    get tents(): any[] {
      return this._defaultTents;
    }
}

