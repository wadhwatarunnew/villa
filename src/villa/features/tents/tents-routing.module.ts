import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResortPageComponent } from './pages/resort-page/resort-page.component';

const routes: Routes = [
  { path: '', component: ResortPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TentsRoutingModule {}
