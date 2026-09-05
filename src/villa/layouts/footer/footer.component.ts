import { Component, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'villa-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
  showScrollTop = false;

  constructor(private menuService: MenuService, @Inject(PLATFORM_ID) private platformId: object) {}
  footerMenu: any;
  tentsMenu: any;
  socialMedia: any;
  contactInfo: any;
  aboutInfo: any;
  terms: any;
  headerInfo: any;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.toggleScrollTopButton();

    window.addEventListener('scroll', () => {
      this.toggleScrollTopButton();
    });
    
    this.menuService.menu$.subscribe(footerMenu => {
      if (footerMenu) {
        this.footerMenu = footerMenu;
        this.tentsMenu = footerMenu.ResortTents.children;
        this.socialMedia = footerMenu.SocialMedia;
        this.contactInfo = footerMenu.ContactInfo;
        this.aboutInfo = footerMenu.FooterAboutInfo;
        this.terms = footerMenu.TermsInfo;
        this.headerInfo = footerMenu.HeaderInfo;
      }
    });

    this.toggleScrollTopButton();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.toggleScrollTopButton();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleScrollTopButton(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.showScrollTop = window.scrollY > 300;
  }
}
