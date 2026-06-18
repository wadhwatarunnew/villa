import { NgModule } from '@angular/core';
import { TentsRoutingModule } from './tents-routing.module';
import { TentsPageComponent } from './pages';

@NgModule({
  imports: [TentsRoutingModule, TentsPageComponent]
})
export class TentsModule {}
