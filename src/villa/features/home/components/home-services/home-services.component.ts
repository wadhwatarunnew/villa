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
      description: 'Crafting <strong>premium luxury resort tents, safari tents, glamping accommodations, and bespoke hospitality structures,</strong> combining refined design, superior materials, and all-weather performance.',
      iconName: 'festival',
    },
    {
      title: 'Custom Design & Engineering',
      description: 'Every tent is <strong>precision-designed to your project,</strong> with bespoke layouts, elevations, interiors, dimensions, and structural engineering tailored to deliver a distinctive guest experience.',
      iconName: 'architecture',
    },
    {
      title: 'Exceptional Materials & Craftsmanship',
      description: 'Built with <strong>high-performance waterproof fabrics, UV-resistant roofing, galvanized steel structures, insulated wall systems, and premium flooring </strong>for lasting durability and all-weather performance.',
      iconName: 'gpp_good',
    },
    {
      title: 'Turnkey Project Delivery',
      description: 'From <strong>planning and manufacturing to logistics, installation, and commissioning, </strong>we manage every stage of your luxury hospitality project with precision and expertise.',
      iconName: 'settings',
    },
    {
      title: 'Global Project Delivery',
      description: 'Delivering and installing <strong>bespoke luxury tented experiences </strong>for resorts, safari lodges, eco-retreats, and wellness destinations across <strong>India and international markets.</strong>',
      iconName: 'public',
    },
    {
      title: 'Dedicated After-Sales Support',
      description: 'Providing <strong>technical assistance, maintenance guidance, spare parts, and long-term service </strong>to ensure lasting performance throughout your tent’s lifecycle.',
      iconName: 'handshake',
    },
  ];
}
