import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'villa-home-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-services.component.html',
})
export class HomeServicesComponent {


  services = [
    {
      title: 'Luxury Tent Manufacturing',
      description: 'Design and manufacture premium luxury resort tents, safari tents, glamping accommodations, and customized hospitality structures built for every climate.',
      iconName: 'festival',
    },
    {
      title: 'ECustom Design & Engineering',
      description: 'Every tent is tailored to your project with customized layouts, elevations, interiors, dimensions, and structural engineering for a unique guest experience.',
      iconName: 'architecture',
    },
    {
      title: 'Premium Quality Materials',
      description: 'Manufactured using waterproof fabrics, UV-resistant roofing, galvanized steel structures, insulated wall systems, and premium wooden flooring for long-lasting performance.',
      iconName: 'gpp_good',
    },
    {
      title: 'Turnkey Project Execution',
      description: 'From planning and manufacturing to logistics, installation, and commissioning, we manage every stage of your luxury hospitality project.',
      iconName: 'settings',
    },
    {
      title: 'Worldwide Installation',
      description: 'Successfully delivering and installing luxury tents for resorts, safari lodges, eco-retreats, wellness destinations, and tourism projects across India and international markets.',
      iconName: 'public',
    },
    {
      title: 'After-Sales Support',
      description: 'Dedicated technical assistance, maintenance guidance, spare parts support, and long-term customer service ensure maximum performance throughout your tents lifecycle.',
      iconName: 'handshake',
    },
  ];
}
