import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './pages';

@NgModule({
  imports: [ContactRoutingModule, ContactPageComponent]
})
export class ContactModule {}
