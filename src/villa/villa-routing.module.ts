import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/pages/home-page/home-page.component').then(m => m.HomePageComponent)
      },
      {
        path: 'about-us',
        loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'resort-tent',
        pathMatch: 'full',
        loadComponent: () => import('./features/tents/pages/tents-page/tents-page.component').then(m => m.TentsPageComponent)
      },
      {
        path: 'projects',
        loadComponent: () => import('./features/projects/pages/projects-page/projects-page.component').then(m => m.ProjectsPageComponent)
      },
      {
        path: 'gallery',
        loadComponent: () => import('./features/gallery/pages/gallery-page/gallery-page.component').then(m => m.GalleryPageComponent)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'get-a-quote',
        loadComponent: () => import('./features/quote/pages/quote-page/quote-page.component').then(m => m.QuotePageComponent)
      },
      {
        path: 'download-brochure',
        loadComponent: () => import('./features/download-brochure/pages/download-brochure-page/download-brochure-page.component').then(m => m.DownloadBrochurePageComponent)
      },
      {
        path: 'terms',
        loadComponent: () => import('./features/terms/pages/terms-page/terms-page.component').then(m => m.TermsPageComponent)
      },
      {
        path: 'blogs',
        children: [
          {
            path: '',
            loadComponent: () => import('./features/blogs/pages/blogs-page/blogs-page.component').then(m => m.BlogsPageComponent)
          },
          {
            path: ':slug',
            loadComponent: () => import('./features/blog-detail/pages/blog-detail-page/blog-detail-page.component').then(m => m.BlogDetailPageComponent)
          }
        ]
      },
      {
        path: ':slug',
        loadComponent: () =>
          import('./dynamic-page/dynamic-page.component')
          .then(m => m.DynamicPageComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class VillaRoutingModule {}
