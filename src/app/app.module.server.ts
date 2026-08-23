import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { VillaModule } from './villa.module';
import { VillaComponent } from './villa.component';

@NgModule({
  imports: [
    VillaModule,
    ServerModule,
  ],
  bootstrap: [VillaComponent],
})
export class AppServerModule {}
