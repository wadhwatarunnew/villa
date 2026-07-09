import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { VillaRoutingModule } from './villa-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { VillaComponent } from './villa.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [VillaComponent],
  imports: [BrowserModule, RouterModule, CoreModule, SharedModule, LayoutsModule, VillaRoutingModule, HttpClientModule],
  bootstrap: [VillaComponent]
})
export class VillaModule {}
