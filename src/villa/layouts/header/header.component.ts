import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { projectCategories } from '../../features/projects/project-collections.data';

@Component({
  selector: 'villa-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  socialMedia: any;
  contactInfo: any;
  headerInfo: any;
  resortTentCategories: any[] = [];
  projectCategoriesList: any[] = [];
  selectedResortCategory: any = null;
  selectedResortTent: any = null;
  selectedProjectCategory: any = null;
  selectedProject: any = null;

  isScrolled = false;
  isMobileMenuOpen = false;
  isResortMenuOpen = false;
  isResortMobileOpen = false;
  selectedResortMobileCategory: any = null;
  isProjectsMenuOpen = false;
  isProjectsMobileOpen = false;
  selectedProjectsMobileCategory: any = null;

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
      this.selectedResortCategory = this.resortTentCategories[0] ?? null;
      this.selectedResortTent = this.selectedResortCategory?.tents?.[0] ?? null;

      const projectNode = menu?.Projects ?? null;
      const projectChildren = projectNode?.children ?? projectNode?.items ?? [];
      this.projectCategoriesList = this.normalizeProjectCategories(projectChildren);
      this.selectedProjectCategory = this.projectCategoriesList[0] ?? null;
      this.selectedProject = this.selectedProjectCategory?.projects?.[0] ?? null;
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

  toggleResortMenu(event?: Event): void {
    event?.stopPropagation();
    this.isResortMenuOpen = !this.isResortMenuOpen;
  }

  toggleProjectsMenu(event?: Event): void {
    event?.stopPropagation();
    this.isProjectsMenuOpen = !this.isProjectsMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const resortTrigger = target.closest('[data-resort-menu-trigger]');
    const projectTrigger = target.closest('[data-project-menu-trigger]');
    const resortMenu = target.closest('.resort-menu-dropdown');

    if (!resortTrigger && !projectTrigger && !resortMenu) {
      this.isResortMenuOpen = false;
      this.isProjectsMenuOpen = false;
    }
  }

  toggleResortMobileMenu(): void {
    this.isResortMobileOpen = !this.isResortMobileOpen;
    if (!this.isResortMobileOpen) {
      this.selectedResortMobileCategory = null;
    }
  }

  toggleResortMobileCategory(category: any): void {
    this.selectedResortMobileCategory = this.selectedResortMobileCategory?.slug === category?.slug ? null : category;
  }

  toggleProjectsMobileMenu(): void {
    this.isProjectsMobileOpen = !this.isProjectsMobileOpen;
    if (!this.isProjectsMobileOpen) {
      this.selectedProjectsMobileCategory = null;
    }
  }

  toggleProjectsMobileCategory(category: any): void {
    this.selectedProjectsMobileCategory = this.selectedProjectsMobileCategory?.slug === category?.slug ? null : category;
  }

  selectResortCategory(category: any): void {
    this.selectedResortCategory = category ?? null;
    this.selectedResortTent = this.selectedResortCategory?.tents?.[0] ?? null;
    this.isResortMenuOpen = false;
  }

  selectResortTent(tent: any): void {
    this.selectedResortTent = tent ?? null;
    this.isResortMenuOpen = false;
  }

  getResortViewAllLabel(): string {
    const name = this.selectedResortCategory?.name ?? 'Resort Tents';
    return `VIEW ALL ${name.toUpperCase()}`;
  }

  getProjectViewAllLabel(): string {
    const name = this.selectedProjectCategory?.name ?? 'Projects';
    return `VIEW ALL ${name.toUpperCase()}`;
  }

  selectProjectCategory(category: any): void {
    this.selectedProjectCategory = category ?? null;
    this.selectedProject = this.selectedProjectCategory?.projects?.[0] ?? null;
    this.isProjectsMenuOpen = false;
  }

  selectProject(project: any): void {
    this.selectedProject = project ?? null;
    this.isProjectsMenuOpen = false;
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
          description: item?.description ?? item?.summary ?? item?.shortDescription ?? 'Inspired by royal heritage, this collection offers a perfect blend of luxury, comfort and nature.',
          tents,
        };
      });
    }

    return [
      {
        slug: 'ultra-luxury-resort-tent',
        name: 'Ultra Luxury Resort Tent',
        image: '/assets/images/villatent2.webp',
        description: 'Inspired by royal heritage, this collection offers a perfect blend of luxury, comfort and nature.',
        tents: [
          { slug: 'the-taj', name: 'The Taj' },
          { slug: 'ganesha-tent', name: 'Ganesha Tent' },
          { slug: 'rang-mahal-tent', name: 'Rang Mahal Tent' },
          { slug: 'meditation-resort-tent', name: 'Meditation Resort Tent' },
          { slug: 'surya-villa-tent', name: 'Surya Villa Tent' },
          { slug: 'the-raj-villa', name: 'The Raj Villa' },
        ],
      },
      {
        slug: 'luxury-resort-tent',
        name: 'Luxury Resort Tent',
        image: '/assets/images/villatent1.webp',
        description: 'Designed for elevated stays with spacious interiors, natural textures, and handcrafted comfort.',
        tents: [
          { slug: 'aarti-resort', name: 'Aarti Resort' },
          { slug: 'mud-land-resort-tent', name: 'Mud Land Resort Tent' },
          { slug: 'safari-villa', name: 'Safari Villa' },
          { slug: 'luxury-restaurant-tent', name: 'Luxury Restaurant Tent' },
          { slug: 'night-safari-tent', name: 'Night Safari Tent' },
          { slug: 'noor-mahal', name: 'Noor Mahal' },
        ],
      },
      {
        slug: 'indian-resort-tent',
        name: 'Indian Resort Tent',
        image: '/assets/images/villatent3.webp',
        description: 'Rooted in heritage storytelling, these tents blend traditional warmth with contemporary ease.',
        tents: [
          { slug: 'swiss-cottage-tents', name: 'Swiss Cottage Tents' },
          { slug: 'royal-camping-tent', name: 'Royal Camping Tent' },
          { slug: 'safari-resort', name: 'Safari Resort' },
          { slug: 'african-safari-resort-tent', name: 'African Safari Resort Tent' },
        ],
      },
      {
        slug: 'camping-tents',
        name: 'Camping Tents',
        image: '/assets/images/villatent4.webp',
        description: 'Built for scenic stays, quick-set tents that bring comfort, durability, and simple elegance outdoors.',
        tents: [
          { slug: 'luxury-gazebo-tent', name: 'Luxury Gazebo Tent' },
          { slug: 'garden-tent', name: 'Garden Tent' },
          { slug: 'traveling-tent', name: 'Traveling Tent' },
          { slug: 'camping-lounge-tent', name: 'Camping Lounge Tent' },
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
