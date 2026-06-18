import { NgModule } from '@angular/core';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsPageComponent } from './pages';

@NgModule({
  imports: [BlogsRoutingModule, BlogsPageComponent]
})
export class BlogsModule {}
