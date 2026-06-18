import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TentsPageComponent } from './pages';

const routes: Routes = [
  { path: '', component: TentsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TentsRoutingModule {}
