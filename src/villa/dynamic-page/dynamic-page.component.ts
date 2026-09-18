import { Component, Injector, ViewChild, ViewContainerRef, ChangeDetectorRef, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';

import { MenuService } from '../services/menu.service';
import { ApiService } from '../services/api.service';
import { SeoService } from '../services/seo.service';

import { TentDetailPageComponent } from '../features/tents/pages/tent-detail-page/tent-detail-page.component';
import { TentCategoryPageComponent } from '../features/tents/pages/tent-category-page/tent-category-page.component';
import { ProjectCategoryPageComponent } from '../features/projects/pages/project-category-page/project-category-page.component';
import { ProjectDetailPageComponent } from '../features/projects/pages/project-detail-page/project-detail-page.component';
import { BlogDetailPageComponent } from '../features/blog-detail/pages/blog-detail-page/blog-detail-page.component';

@Component({
  selector: 'villa-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent implements OnDestroy {

  selectedComponent: any;
  pageData: any;
  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);
  private menuService = inject(MenuService);
  private apiService = inject(ApiService);

  private destroy$ = new Subject<void>();

  @ViewChild('container', {
    read: ViewContainerRef,
    static: true
  })
  vcr!: ViewContainerRef;

  constructor(
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {}

  componentMap: Record<string, any> = {
    resortTent: TentDetailPageComponent,
    resortCategory: TentCategoryPageComponent,
    projectCategory: ProjectCategoryPageComponent,
    project: ProjectDetailPageComponent,
    blogDetail: BlogDetailPageComponent
  };

  ngOnInit(): void {

    this.route.paramMap
      .pipe(
        tap(params => {
        }),

        switchMap(params => {

          const slug = params.get('slug');

          if (!slug) {
            return [];
          }

          return this.menuService.menu$
            .pipe(
              filter(menu => !!menu),
              takeUntil(this.destroy$),
              tap(() => {
              }),

              switchMap(() => {

                const page =
                  this.menuService.findSlug(slug);

                if (!page) {
                  return [];
                }

                const component =
                  this.componentMap[page.type];

                if (!component) {
                  return [];
                }

                this.selectedComponent = component;

                return this.apiService
                  .getPage(page.api)
                  .pipe(

                    tap(res => {
                      this.pageData = res;

                      if (this.pageData?.Data?.SEOInfo) {
                        this.seoService.setSEO(
                          this.pageData.Data.SEOInfo
                        );
                      }
                      if (!isPlatformBrowser(this.platformId)) { return; }
                      this.vcr.clear();

                      const compRef =
                        this.vcr.createComponent(
                          component
                        );

                      compRef.setInput(
                        'data',
                        res
                      );

                      this.cdr.detectChanges();
                    })
                  );
              })
            );
        }),

        takeUntil(this.destroy$)
      )
      .subscribe({
        error: err => {
        }
      });
  }

  ngOnDestroy(): void {

    this.destroy$.next();
    this.destroy$.complete();

    this.vcr?.clear();
  }
}