import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
  divider?: boolean;
}

@Component({
  selector: 'villa-admin-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {
  navItems: NavItem[] = [];
  isOpen = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeNavItems();
  }

  private initializeNavItems(): void {
    this.navItems = [
      { label: 'Dashboard', icon: 'dashboard', route: '/admin', divider: false },
      { label: 'Hero Banners', icon: 'image', route: '/admin/hero-banners', divider: false },
      { label: 'Tents', icon: 'store', route: '/admin/tents', divider: false },
      { label: 'Projects', icon: 'business', route: '/admin/projects', divider: false },
      { label: 'Gallery', icon: 'photo_library', route: '/admin/gallery', divider: false },
      { label: 'Blogs', icon: 'article', route: '/admin/blogs', divider: false },
      { label: 'Testimonials', icon: 'rate_review', route: '/admin/testimonials', divider: false },
      { label: 'FAQs', icon: 'help', route: '/admin/faqs', divider: false },
      { label: 'Leads', icon: 'people', route: '/admin/leads', badge: 15, divider: false },
      { label: 'SEO', icon: 'language', route: '/admin/seo', divider: false },
      { label: 'Media Library', icon: 'image_search', route: '/admin/media', divider: true },
      { label: 'Settings', icon: 'settings', route: '/admin/settings', divider: false }
    ];
  }

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
