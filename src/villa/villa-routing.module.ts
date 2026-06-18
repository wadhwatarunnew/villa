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
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'tents',
        loadChildren: () => import('./features/tents/tents.module').then(m => m.TentsModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./features/gallery/gallery.module').then(m => m.GalleryModule)
      },
      {
        path: 'blogs',
        loadChildren: () => import('./features/blogs/blogs.module').then(m => m.BlogsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'quote',
        loadChildren: () => import('./features/quote/quote.module').then(m => m.QuoteModule)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule)
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
