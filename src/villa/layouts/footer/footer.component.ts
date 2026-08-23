import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor(private menuService: MenuService) {}
  footerMenu: any;
  tentsMenu: any;
  socialMedia: any;
  contactInfo: any;
  aboutInfo: any;
  terms: any;
  headerInfo: any;

  ngOnInit() {
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
  }
}
