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
  @Input() topSection: any = {};
  
  submitted = false;
  contactForm!: FormGroup;
  ErrorMessage: string = '';
  messageType: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', Validators.required],
      message: ['', Validators.required],
      location: [''],
      referredby: ['']
    });
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const params = new HttpParams()
    .set('Action', 'SaveContactForm')
    .set('name', this.contactForm.value.name || '')
    .set('email', this.contactForm.value.email || '')
    .set('phonenumber', this.contactForm.value.phonenumber || '')
    .set('location', this.contactForm.value.location || '')
    .set('referredby', this.contactForm.value.referredby || '')
    .set('message', this.contactForm.value.message || '');
    
    const BaseUrl = `${environment.apiBaseUrl}/AjaxCall.php`;
    this.http.get(
      BaseUrl,
      { params }
    )
    .subscribe({
      next: (response: any) => {
        this.ErrorMessage = response.Message;
        this.messageType = response.Status;
        this.submitted = true;
        this.contactForm.reset();
      },
      error: (err) => {
        console.error('Submission failed', err);
      }
    });
  }
}
