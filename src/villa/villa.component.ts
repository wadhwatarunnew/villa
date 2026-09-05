import { DOCUMENT } from '@angular/common';
import { Component, OnDestroy, OnInit, Inject, Injectable } from '@angular/core';
import { MenuService } from './services/menu.service';

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

  constructor(private menuService: MenuService, @Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {
    // Load global data
    this.loadSiteData();

    this.startSplashSequence();
  }

  private loadSiteData(): void {
    this.menuService.getMenus().subscribe({
      next: (response) => {
        const menuData = response.data; // ✅ ONLY ONE data
        this.menuItems = menuData;
        this.socialMedia = menuData.SocialMedia;
        this.contactInfo = menuData.ContactInfo;
        this.headerInfo = menuData.HeaderInfo;
        this.resortTents = this.transformMenu(menuData.ResortTents);
        this.projects = this.transformMenu(menuData.Projects);

        this.menuService.setSocialMedia(menuData.SocialMedia);
        this.menuService.setContactInfo(menuData.ContactInfo);
        this.menuService.setHeaderInfo(menuData.HeaderInfo);

        const transformed = {
                              ...menuData,
                              ResortTents: this.transformMenu(menuData.ResortTents),
                              Projects: this.transformMenu(menuData.Projects)
                            };

        this.menuService.setMenu(transformed);

        // Dynamic splash logo
        if (menuData?.HeaderInfo?.logo) {
          this.splashLogo = menuData.HeaderInfo.logo;
        }

        // Dynamic favicon
        if (menuData?.HeaderInfo?.favicon) {
          this.setFavicon(menuData.HeaderInfo.favicon);
        }
      },
      error: (err) => console.error(err)
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
