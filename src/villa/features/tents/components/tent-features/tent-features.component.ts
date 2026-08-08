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

  readonly features: FeatureItem[] = [
    {
      icon: 'bed',
      title: 'Elegant Accommodation',
      description: 'Spacious bedroom with adjoining dressing room and washroom. Porch with mosquito net for peaceful.'
    },
    {
      icon: 'space_dashboard',
      title: 'Flexible Space',
      description: 'Removable canvas wall between bedroom and porch expands living area and offers stunning views.'
    },
    {
      icon: 'house',
      title: 'Superior Construction',
      description: 'Four-layer roof with real wood poles for durability and luxury.'
    },
    {
      icon: 'verified',
      title: 'Quality Assurance',
      description: 'Inspect the Taj at our Vedanta International plant.'
    },
    {
      icon: 'bolt',
      title: 'Storm, Water & Flame Resistance',
      description: 'Built to withstand various elements. Storm-proof, water-proof and flame-retardant.'
    }
  ];

  readonly materials: FeatureItem[] = [
    {
      icon: 'shield',
      title: '450 GSM Shade Net (90% Shade)',
      description: 'Top layer for shade & UV protection'
    },
    {
      icon: 'water_drop',
      title: '650 GSM PVC Waterproof Layer',
      description: 'Second layer for complete waterproofing'
    },
    {
      icon: 'checkroom',
      title: '425 GSM Waterproof Canvas',
      description: 'Third layer for extra strength & durability'
    },
    {
      icon: 'layers',
      title: '200 GSM Polyester Inner Lining',
      description: 'Soft, breathable & elegant finish'
    },
    {
      icon: 'construction',
      title: 'Galvanized Steel Structure',
      description: 'Rust resistant framework for long life'
    }
  ];
}
