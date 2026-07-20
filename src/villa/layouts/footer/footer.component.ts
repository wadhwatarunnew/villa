import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'villa-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();

  constructor(private menuService: MenuService) {}
  footerMenu: any;
  tentsMenu: any;

  ngOnInit() {
    this.menuService.menu$.subscribe(footerMenu => {
      if (footerMenu) {
        this.footerMenu = footerMenu;
        this.tentsMenu = footerMenu.ResortTents.children;
      }
    });
  }
}
