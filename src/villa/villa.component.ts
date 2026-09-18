import { DOCUMENT } from '@angular/common';
import { Component, OnDestroy, OnInit, Inject, inject, Injectable } from '@angular/core';
import { MenuService } from './services/menu.service';
import { CanonicalService } from './services/canonical.service';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'villa-root',
  standalone: false,
  templateUrl: './villa.component.html',
  styleUrls: ['./villa.component.scss']
})
export class VillaComponent implements OnInit, OnDestroy {
  showSplash = true;
  loadingProgress = 0;
  splashLogo = '';

  menuItems: any;
  resortTents: any;
  projects: any;
  socialMedia: any;
  contactInfo: any;
  headerInfo: any;

  private progressTimer?: ReturnType<typeof setInterval>;
  private completeTimer?: ReturnType<typeof setTimeout>;
  private hideTimer?: ReturnType<typeof setTimeout>;
  private canonicalService = inject(CanonicalService);

  constructor(private menuService: MenuService, @Inject(DOCUMENT) private document: Document) {
    this.canonicalService.init();
  }
  
  private platformId = inject(PLATFORM_ID);
  ngOnInit(): void {
    // Load global data
    this.loadSiteData();

    if (isPlatformBrowser(this.platformId)) {
      this.startSplashSequence();
    }
  }

private loadSiteData(): void {
  this.menuService.getMenus().subscribe({
    next: (response) => {
      const menuData = response.data;

      this.menuItems = menuData;
      this.socialMedia = menuData?.SocialMedia;
      this.contactInfo = menuData?.ContactInfo;
      this.headerInfo = menuData?.HeaderInfo;

      this.resortTents = this.transformMenu(
        menuData?.ResortTents
      );

      this.projects = this.transformMenu(
        menuData?.Projects
      );

      // IMPORTANT:
      // Put the menu into MenuService so findSlug()
      // can search the flattened menu.
      const transformedMenu = {
        ...menuData,
        ResortTents: this.resortTents,
        Projects: this.projects
      };

      this.menuService.setMenu(transformedMenu);

      this.splashLogo =
        '/villadashboard/uploads/logo/splash-logo.png';

      if (menuData?.HeaderInfo?.favicon) {
        this.setFavicon(
          menuData.HeaderInfo.favicon
        );
      }
    },

    error: (err) => {
      console.error(
        'Failed to load site menu:',
        err
      );
    }
  });
}

  ngOnDestroy(): void {
    this.clearTimers();
  }

  private startSplashSequence(): void {
    const durationMs = 2200;
    const startTime = Date.now();

    this.progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(96, Math.floor((elapsed / durationMs) * 100));
      this.loadingProgress = progress;
    }, 30);

    this.completeTimer = setTimeout(() => {
      this.loadingProgress = 100;
      this.hideTimer = setTimeout(() => {
        this.showSplash = false;
        this.clearTimers();
      }, 220);
    }, durationMs);
  }

  private clearTimers(): void {
    if (this.progressTimer) {
      clearInterval(this.progressTimer);
      this.progressTimer = undefined;
    }

    if (this.completeTimer) {
      clearTimeout(this.completeTimer);
      this.completeTimer = undefined;
    }

    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = undefined;
    }
  }

  private setFavicon(url: string): void {
    let favicon = this.document.querySelector(
      "link[rel~='icon']"
    ) as HTMLLinkElement | null;

    if (!favicon) {
      favicon = this.document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/webp';

      this.document.head.appendChild(favicon);
    }

    favicon.href = url;
  }

  private transformMenu(node: any, level = 0): any {

  if (Array.isArray(node)) {
    return node.map(item =>
      this.transformMenu(item, level)
    );
  }

  if (!node || typeof node !== 'object') {
    return node;
  }

  return {
    ...node,

    level,

    type: node.type,

    children: Array.isArray(node.children)
      ? node.children.map((child: any) =>
          this.transformMenu(child, level + 1)
        )
      : []
  };
}
}
