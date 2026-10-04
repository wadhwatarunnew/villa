import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubePageComponent } from './pages';

const routes: Routes = [
  { path: '', component: YoutubePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule {}
