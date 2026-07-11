import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailPageComponent } from '../blog-detail/pages/blog-detail-page/blog-detail-page.component';
import { BlogsPageComponent } from './pages';

const routes: Routes = [
  { path: '', component: BlogsPageComponent },
  { path: ':slug', component: BlogDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule {}
