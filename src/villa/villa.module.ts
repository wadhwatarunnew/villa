import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { VillaRoutingModule } from './villa-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { VillaComponent } from './villa.component';

@NgModule({
  declarations: [VillaComponent],
  imports: [BrowserModule, RouterModule, CoreModule, SharedModule, LayoutsModule, VillaRoutingModule],
  bootstrap: [VillaComponent]
})
export class VillaModule {}
