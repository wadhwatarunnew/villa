import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { heroArrowDownTray, heroArrowRight, heroBars3, heroChevronDown } from '@ng-icons/heroicons/outline';
import { heroEnvelopeSolid, heroGlobeAltSolid, heroPencilSquareSolid, heroPhoneSolid, heroSparklesSolid, heroTruckSolid } from '@ng-icons/heroicons/solid';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item.interface';
import { tentCategories, tentRouteSlug } from '../../features/tents/tent-collections.data';
import { projectCategories as staticProjectCategories, projectRouteSlug } from '../../features/projects/project-collections.data';

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
  menuItems: any;
  resortTents: any;
  readonly resortCategories = tentCategories.map(category => ({
    ...category,
    total: category.tents.length
  }));
  activeTentCategory = this.resortCategories[0];
  readonly projectCategories = staticProjectCategories.map(category => ({
    ...category,
    total: category.projects.length
  }));
  activeProjectCategory = this.projectCategories[0];
  projects: any;
  socialMedia: any;
  contactInfo: any;
  headerInfo: any;

  isScrolled = false;
  isMobileMenuOpen = false;
  isMegaMenuClosed = false;
  mobileExpandedSection: 'tents' | 'projects' | null = null;
  mobileExpandedCategory: string | null = null;

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

    this.menuService.getMenus().subscribe({
      next: (response) => {
        const menuData = response.data; // ✅ ONLY ONE data
        this.menuItems = menuData;
        this.socialMedia = menuData.SocialMedia;
        this.contactInfo = menuData.ContactInfo;
        this.headerInfo = menuData.HeaderInfo;
        this.resortTents = this.transformMenu(menuData.ResortTents);
        this.projects = this.transformMenu(menuData.Projects);

        const transformed = {
                              ...menuData,
                              ResortTents: this.transformMenu(menuData.ResortTents),
                              Projects: this.transformMenu(menuData.Projects)
                            };

        this.menuService.setMenu(transformed)
      },
      error: (err) => console.error(err)
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
    if (!this.isMobileMenuOpen) {
      this.mobileExpandedSection = null;
      this.mobileExpandedCategory = null;
    }
  }

  toggleMobileSection(section: 'tents' | 'projects'): void {
    this.mobileExpandedSection = this.mobileExpandedSection === section ? null : section;
    this.mobileExpandedCategory = null;
  }

  toggleMobileCategory(slug: string): void {
    this.mobileExpandedCategory = this.mobileExpandedCategory === slug ? null : slug;
  }

  selectTentCategory(category: typeof this.resortCategories[number]): void {
    this.activeTentCategory = category;
  }

  selectProjectCategory(category: typeof this.projectCategories[number]): void {
    this.activeProjectCategory = category;
  }

  closeMegaMenu(): void {
    this.isMegaMenuClosed = true;
  }

  resetMegaMenuClick(): void {
    this.isMegaMenuClosed = false;
  }

  tentRouteSlug(tent: string): string {
    return tentRouteSlug(tent);
  }

  projectRouteSlug(project: string): string {
    return projectRouteSlug(project);
  }

  private transformMenu(node: any, level = 0): any {

    return {
            ...node,

            level,

            // MUST preserve API type
            type: node.type,

            children: node.children
              ? node.children.map((child: any) =>
                  this.transformMenu(child, level + 1)
                )
              : []
          };
  }
}
