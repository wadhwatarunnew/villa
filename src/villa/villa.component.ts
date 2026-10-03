import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, inject } from '@angular/core';
import { MenuService } from './services/menu.service';
import { CanonicalService } from './services/canonical.service';

@Component({
  selector: 'villa-root',
  standalone: false,
  templateUrl: './villa.component.html',
  styleUrls: ['./villa.component.scss']
})
export class VillaComponent implements OnInit {
  menuItems: any;
  resortTents: any;
  projects: any;
  socialMedia: any;
  contactInfo: any;
  headerInfo: any;

  private canonicalService = inject(CanonicalService);

  constructor(private menuService: MenuService, @Inject(DOCUMENT) private document: Document) {
    this.canonicalService.init();
  }

  ngOnInit(): void {
    // Load global data
    this.loadSiteData();
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
