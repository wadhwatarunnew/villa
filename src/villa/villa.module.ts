import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { VillaRoutingModule } from './villa-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { VillaComponent } from './villa.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [VillaComponent],
  imports: [BrowserModule, RouterModule, CoreModule, SharedModule, LayoutsModule, VillaRoutingModule],
  bootstrap: [VillaComponent],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ]
})
export class VillaModule {}
