import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { VillaModule } from '../villa//villa.module';
import { VillaComponent } from '../villa/villa.component';

@NgModule({
  imports: [
    VillaModule,
    ServerModule,
  ],
  bootstrap: [VillaComponent],
})
export class AppServerModule {}
