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
        loadChildren: () => import('./features/tents/tents.module').then(m => m.TentsModule)
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
        path: 'contact-us',
        loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'quote',
        loadChildren: () => import('./features/quote/quote.module').then(m => m.QuoteModule)
      },
      {
        path: ':slug',
        loadComponent: () =>
          import('./dynamic-page/dynamic-page.component')
          .then(m => m.DynamicPageComponent)
      }
      // {
      //   path: ':slug',
      //   loadChildren: () => import('./features/slug-router/slug-router-module').then(m => m.SlugRouterModule)
      // }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class VillaRoutingModule {}
