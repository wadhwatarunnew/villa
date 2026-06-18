import { NgModule } from '@angular/core';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryPageComponent } from './pages';

@NgModule({
  imports: [GalleryRoutingModule, GalleryPageComponent]
})
export class GalleryModule {}
