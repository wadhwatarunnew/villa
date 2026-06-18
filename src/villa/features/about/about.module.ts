import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './pages';

@NgModule({
  imports: [AboutRoutingModule, AboutPageComponent]
})
export class AboutModule {}
