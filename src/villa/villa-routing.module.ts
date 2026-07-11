import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

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
        path: 'about',
        loadComponent: () => import('./features/about/pages/about-page/about-page.component').then(m => m.AboutPageComponent)
      },
      {
        path: 'tents',
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
        path: 'contact',
        loadComponent: () => import('./features/contact/pages/contact-page/contact-page.component').then(m => m.ContactPageComponent)
      },
      {
        path: 'quote',
        loadComponent: () => import('./features/quote/pages/quote-page/quote-page.component').then(m => m.QuotePageComponent)
      }
    ]
  },
  {
    path: 'villadashboard',
    loadComponent: () => import('./admin/authentication/login/pages/login-page/login-page.component').then(m => m.LoginPageComponent)
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
      }
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
