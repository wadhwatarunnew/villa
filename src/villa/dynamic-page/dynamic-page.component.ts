import { Component, OnInit, inject, Injector, ViewChild, ViewContainerRef, ComponentRef, ChangeDetectorRef    } from '@angular/core';
import { NgComponentOutlet, JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { ApiService } from '../services/api.service';
import { SeoService } from '../services/seo.service';
import { TentsPageComponent } from '../features/tents/pages/tents-page/tents-page.component';
import { CategoryPageComponent } from '../features/tents/pages/category/category.component';
import { ProjectsPageComponent } from '../features/projects/pages/projects-page/projects-page.component';
import { ProjectCategoryComponent } from '../features/projects/pages/category/category.component';
import { BlogDetailPageComponent } from '../features/blog-detail/pages/blog-detail-page/blog-detail-page.component';

@Component({
  selector: 'villa-dynamic-page',
  imports: [NgComponentOutlet, JsonPipe],
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css',
})

export class DynamicPageComponent {
  selectedComponent: any;
  pageData: any;
  injector!: Injector;

  private cdr = inject(ChangeDetectorRef);
  @ViewChild('container', { read: ViewContainerRef, static: true })
  vcr!: ViewContainerRef;

  constructor(private route: ActivatedRoute, private seoService:SeoService) {}
  private MenuService = inject(MenuService);
  private ApiService = inject(ApiService);

  componentMap: Record<string, any> = {
    resortTent: TentsPageComponent,
    resortCategory: CategoryPageComponent,
    project: ProjectsPageComponent,
    projectCategory: ProjectCategoryComponent,
    blogDetail: BlogDetailPageComponent
  };

  ngOnInit() {

    this.route.params.subscribe(params => {

      const slug = params['slug'];
      this.loadPage(slug);

      // const page = this.MenuService.findSlug(slug);

      // if (!page) return;

      // this.ApiService.getPage(page.api).subscribe(res => {

      //   this.pageData = res;
      //   this.seoService.setSEO(this.pageData.Data.SEOInfo);
      //   this.vcr.clear();
      //   const component = this.componentMap[page.type] as any;

      //   if (!component) {
      //     console.error('Component not found:', page.type);
      //     return;
      //   }

      //   const compRef = this.vcr.createComponent(component);
      //   (compRef.instance as any).data = res;
      //   console.log('selectedComponent:', this.selectedComponent);
      // });

    });
  }

  loadPage(slug: string)
  {
    const page = this.MenuService.findSlug(slug);
    if (!page) {
      setTimeout(() => {
        this.loadPage(slug);
      }, 100);
      return;
    }

    this.selectedComponent = this.componentMap[page.type];

    this.ApiService.getPage(page.api).subscribe(res => {

      this.pageData = res;
      this.seoService.setSEO(this.pageData.Data.SEOInfo);
      
      this.vcr.clear();
      const component = this.componentMap[page.type] as any;

      if (!component) {
        console.error('Component not found:', page.type);
        return;
      }

      const compRef = this.vcr.createComponent(component);
      (compRef.instance as any).data = res;
      console.log('selectedComponent:', this.selectedComponent);
    });
  }
}
