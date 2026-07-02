import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminNavigationComponent } from '../admin/admin-navigation/admin-navigation.component';

@NgModule({
  declarations: [CustomerLayoutComponent, AdminLayoutComponent],
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, AdminHeaderComponent, AdminFooterComponent, AdminNavigationComponent],
  exports: [CustomerLayoutComponent, AdminLayoutComponent]
})
export class LayoutsModule {}
