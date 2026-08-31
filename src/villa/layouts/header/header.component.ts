import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { heroArrowDownTray, heroArrowRight, heroBars3, heroChevronDown } from '@ng-icons/heroicons/outline';
import { heroEnvelopeSolid, heroGlobeAltSolid, heroPencilSquareSolid, heroPhoneSolid, heroSparklesSolid, heroTruckSolid } from '@ng-icons/heroicons/solid';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item.interface';

@Component({
  selector: 'villa-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly heroPhoneIcon = heroPhoneSolid;
  readonly heroEnvelopeIcon = heroEnvelopeSolid;
  readonly heroChevronDownIcon = heroChevronDown;
  readonly heroArrowRightIcon = heroArrowRight;
  readonly heroArrowDownTrayIcon = heroArrowDownTray;
  readonly heroBars3Icon = heroBars3;
  
  socialMedia: any;
  contactInfo: any;
  headerInfo: any;

  isScrolled = false;
  isMobileMenuOpen = false;

  readonly topBarHighlights = [
    { icon: 'local_shipping', label: 'Worldwide Delivery' },
    { icon: 'edit', label: 'Custom Designs' },
    { icon: 'star', label: 'Premium Quality' },
    { icon: 'public', label: 'Sustainable Solutions' }
  ];

  readonly primaryNav = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about-us' },
    { label: 'Projects', link: '/projects' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Blogs', link: '/blogs' },
    { label: 'Contact', link: '/contact' }
  ];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.updateScrollState();

    this.menuService.socialMedia$.subscribe(data => {
      this.socialMedia = data;
    });

    this.menuService.contactInfo$.subscribe(data => {
      this.contactInfo = data;
    });

    this.menuService.headerInfo$.subscribe(data => {
      this.headerInfo = data;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateScrollState();
  }

  private updateScrollState(): void {
    this.isScrolled = window.scrollY > 10;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
