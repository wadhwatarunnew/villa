import { Component, OnInit, inject, Injector, ViewChild, ViewContainerRef, ComponentRef, ChangeDetectorRef    } from '@angular/core';
import { NgComponentOutlet, JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { ApiService } from '../services/api.service';
import { SeoService } from '../services/seo.service';
import { TentDetailPageComponent } from '../features/tents/pages/tent-detail-page/tent-detail-page.component';
import { TentCategoryPageComponent } from '../features/tents/pages/tent-category-page/tent-category-page.component';
import { ProjectsPageComponent } from '../features/projects/pages/projects-page/projects-page.component';
import { ProjectCategoryPageComponent } from '../features/projects/pages/project-category-page/project-category-page.component';
import { ProjectDetailPageComponent } from '../features/projects/pages/project-detail-page/project-detail-page.component';
import { BlogDetailPageComponent } from '../features/blog-detail/pages/blog-detail-page/blog-detail-page.component';

@Component({
  selector: 'villa-dynamic-page',
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
    resortTent: TentDetailPageComponent,
    resortCategory: TentCategoryPageComponent,
    projectCategory: ProjectCategoryPageComponent,
    project: ProjectDetailPageComponent,
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
        // console.error('Component not found:', page.type);
        return;
      }

      const compRef = this.vcr.createComponent(component);
      (compRef.instance as any).data = res;
      compRef.setInput('data', res);
      this.cdr.detectChanges();
      // console.log('selectedComponent:', this.selectedComponent);
    });
  }
}
