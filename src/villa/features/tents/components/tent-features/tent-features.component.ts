import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'villa-tent-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tent-features.component.html'
})
export class TentFeaturesComponent {
  @Input({ required: true }) name = '';
  @Input() tentDetails: any = {};
}
