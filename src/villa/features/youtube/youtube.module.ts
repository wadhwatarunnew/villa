import { NgModule } from '@angular/core';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubePageComponent } from './pages';

@NgModule({
  imports: [YoutubeRoutingModule, YoutubePageComponent]
})
export class YoutubeModule {}
