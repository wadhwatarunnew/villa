import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [CustomerLayoutComponent],
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  exports: [CustomerLayoutComponent]
})
export class LayoutsModule {}
