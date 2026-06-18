import { NgModule } from '@angular/core';
import { QuoteRoutingModule } from './quote-routing.module';
import { QuotePageComponent } from './pages';

@NgModule({
  imports: [QuoteRoutingModule, QuotePageComponent]
})
export class QuoteModule {}
