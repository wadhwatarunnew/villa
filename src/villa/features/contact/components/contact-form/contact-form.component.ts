import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../../../src/environments/environment';
import { SharedContactFormComponent } from '../../../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'villa-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SharedContactFormComponent],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent {
  @Input() formInfo: any = {};
}
