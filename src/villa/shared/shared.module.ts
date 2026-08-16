import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  imports: [CommonModule, SharedContactFormComponent],
  exports: [CommonModule, SharedContactFormComponent]
})
export class SharedModule {}
