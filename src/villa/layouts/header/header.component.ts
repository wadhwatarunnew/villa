import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { heroArrowDownTray, heroArrowRight, heroBars3, heroChevronDown } from '@ng-icons/heroicons/outline';
import { heroEnvelopeSolid, heroGlobeAltSolid, heroPencilSquareSolid, heroPhoneSolid, heroSparklesSolid, heroTruckSolid } from '@ng-icons/heroicons/solid';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item.interface';
import { projectCategories } from '../../features/projects/project-collections.data';

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
  resortTentCategories: any[] = [];
  projectCategoriesList: any[] = [];

  isScrolled = false;
  isMobileMenuOpen = false;
  isResortMenuOpen = false;
  isResortMobileOpen = false;
  isProjectsMenuOpen = false;
  isProjectsMobileOpen = false;

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

  constructor(private menuService: MenuService, @Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.updateScrollState();

    window.addEventListener('scroll', () => {
      this.updateScrollState();
    });

    this.menuService.socialMedia$.subscribe(data => {
      this.socialMedia = data;
    });

    this.menuService.contactInfo$.subscribe(data => {
      this.contactInfo = data;
    });

    this.menuService.headerInfo$.subscribe(data => {
      this.headerInfo = data;
    });

    this.menuService.menu$.subscribe(menu => {
      const resortNode = menu?.ResortTents ?? menu?.ResortTent ?? null;
      const children = resortNode?.children ?? resortNode?.items ?? [];

      this.resortTentCategories = this.normalizeResortCategories(children);

      const projectNode = menu?.Projects ?? null;
      const projectChildren = projectNode?.children ?? projectNode?.items ?? [];
      this.projectCategoriesList = this.normalizeProjectCategories(projectChildren);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateScrollState();
  }

  updateScrollState(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleResortMobileMenu(): void {
    this.isResortMobileOpen = !this.isResortMobileOpen;
  }

  toggleProjectsMobileMenu(): void {
    this.isProjectsMobileOpen = !this.isProjectsMobileOpen;
  }

  private normalizeResortCategories(items: any[] | null): any[] {
    const categories = Array.isArray(items) ? items : [];

    if (categories.length) {
      return categories.map((item: any) => {
        const tents = Array.isArray(item?.children)
          ? item.children.map((tent: any) => ({
              slug: tent?.slug ?? tent?.link ?? tent?.url ?? '/',
              name: tent?.name ?? tent?.title ?? tent?.label ?? 'Tent',
            }))
          : Array.isArray(item?.tents)
            ? item.tents.map((tent: any) => ({
                slug: tent?.slug ?? tent?.link ?? tent?.url ?? '/',
                name: tent?.name ?? tent?.title ?? tent?.label ?? 'Tent',
              }))
            : [];

        return {
          slug: item?.slug ?? item?.link ?? item?.url ?? '/',
          name: item?.name ?? item?.title ?? item?.label ?? 'Resort Tent',
          image: item?.image ?? item?.img ?? item?.thumbnail ?? item?.featuredImage ?? '/assets/images/villatent1.webp',
          buttonLabel: item?.buttonLabel ?? 'Explore',
          tents,
        };
      });
    }

    return [
      {
        slug: 'ultra-luxury-resort-tent',
        name: 'Ultra Luxury Resort Tent',
        image: '/assets/images/villatent2.webp',
        buttonLabel: 'Explore',
        tents: [
          { slug: 'the-taj', name: 'The Taj' },
          { slug: 'ganesha-tent', name: 'Ganesha Tent' },
          { slug: 'rang-mahal-tent', name: 'Rang Mahal Tent' },
        ],
      },
      {
        slug: 'luxury-resort-tent',
        name: 'Luxury Resort Tent',
        image: '/assets/images/villatent1.webp',
        buttonLabel: 'Explore',
        tents: [
          { slug: 'aarti-resort', name: 'Aarti Resort' },
          { slug: 'mud-land-resort-tent', name: 'Mud Land Resort Tent' },
          { slug: 'safari-villa', name: 'Safari Villa' },
        ],
      },
      {
        slug: 'indian-resort-tent',
        name: 'Indian Resort Tent',
        image: '/assets/images/villatent3.webp',
        buttonLabel: 'Explore',
        tents: [
          { slug: 'swiss-cottage-tents', name: 'Swiss Cottage Tents' },
          { slug: 'royal-camping-tent', name: 'Royal Camping Tent' },
          { slug: 'african-safari-resort-tent', name: 'African Safari Resort Tent' },
        ],
      },
      {
        slug: 'camping-tents',
        name: 'Camping Tents',
        image: '/assets/images/villatent4.webp',
        buttonLabel: 'Explore',
        tents: [
          { slug: 'luxury-gazebo-tent', name: 'Luxury Gazebo Tent' },
          { slug: 'garden-tent', name: 'Garden Tent' },
          { slug: 'traveling-tent', name: 'Traveling Tent' },
        ],
      },
    ];
  }

  private normalizeProjectCategories(items: any[] | null): any[] {
    const categories = Array.isArray(items) ? items : [];

    if (categories.length) {
      return categories.map((item: any) => ({
        slug: item?.slug ?? item?.link ?? item?.url ?? '/',
        name: item?.name ?? item?.title ?? item?.label ?? 'Projects',
        image: item?.image ?? item?.img ?? item?.thumbnail ?? item?.featuredImage ?? '/assets/images/villatent1.webp',
        projects: Array.isArray(item?.children)
          ? item.children.map((project: any) => ({
              slug: project?.slug ?? project?.link ?? project?.url ?? '/',
              name: project?.name ?? project?.title ?? project?.label ?? 'Project',
            }))
          : Array.isArray(item?.projects)
            ? item.projects.map((project: any) => ({
                slug: project?.slug ?? project?.link ?? project?.url ?? '/',
                name: project?.name ?? project?.title ?? project?.label ?? 'Project',
              }))
            : [],
      }));
    }

    return projectCategories.map((category: any) => ({
      slug: category.slug,
      name: category.name,
      image: category.image,
      projects: category.projects.map((project: string) => ({
        slug: category.slug,
        name: project,
      })),
    }));
  }
}
