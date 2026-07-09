import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../../services/menu.service';
import { ApiService } from '../../../../services/api.service';
import { TentsHighlightComponent } from '../../components/tents-highlight/tents-highlight.component';

@Component({
  selector: 'villa-tents-page',
  imports: [CommonModule, TentsHighlightComponent],
  templateUrl: './resort-page.component.html',
  styleUrls: ['./resort-page.component.scss']
})
export class ResortPageComponent {
  pageData: any;
  resortData: any;
  resortMetaData: any;
  resortGalleryInfo: any;
  injector!: Injector;

  constructor(private route: ActivatedRoute) {}
  private MenuService = inject(MenuService);
  private ApiService = inject(ApiService);

  ngOnInit() {
    this.ApiService.getPage('Action=GetResortTentPage').subscribe(res => {
      this.pageData = res;
      this.resortData = this.pageData.Data.ResortInfo;
      this.resortMetaData = this.pageData.Data.SEOInfo;
      this.resortGalleryInfo = this.pageData.Data.GalleryInfo;

      console.log("pageData === ", this.pageData);
    });
  }
}
