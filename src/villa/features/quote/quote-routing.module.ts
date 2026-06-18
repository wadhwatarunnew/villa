import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotePageComponent } from './pages';

const routes: Routes = [
  { path: '', component: QuotePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule {}
