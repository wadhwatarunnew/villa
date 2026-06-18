import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages';

@NgModule({
  imports: [HomeRoutingModule, HomePageComponent]
})
export class HomeModule {}
