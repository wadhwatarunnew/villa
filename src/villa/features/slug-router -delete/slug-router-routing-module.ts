import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlugPageComponent } from './pages/slug-page/slug-page';

const routes: Routes = [
  {
    path: '',
    component: SlugPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlugRouterRoutingModule { }
