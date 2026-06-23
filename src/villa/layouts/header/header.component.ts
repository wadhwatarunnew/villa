import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { heroArrowDownTray, heroArrowRight, heroBars3, heroChevronDown } from '@ng-icons/heroicons/outline';
import { heroEnvelopeSolid, heroGlobeAltSolid, heroPencilSquareSolid, heroPhoneSolid, heroSparklesSolid, heroTruckSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'villa-header',
  standalone: true,
  imports: [RouterModule, NgIcon],
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

  isScrolled = false;
  isMobileMenuOpen = false;

  readonly topBarHighlights = [
    { icon: heroTruckSolid, label: 'Worldwide Delivery' },
    { icon: heroPencilSquareSolid, label: 'Custom Designs' },
    { icon: heroSparklesSolid, label: 'Premium Quality' },
    { icon: heroGlobeAltSolid, label: 'Sustainable Solutions' }
  ];

  readonly primaryNav = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    { label: 'Projects', link: '/projects' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Blogs', link: '/blogs' },
    { label: 'Contact', link: '/contact' }
  ];

  ngOnInit(): void {
    this.updateScrollState();
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
