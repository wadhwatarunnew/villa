import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../../src/environments/environment';

@Component({
  selector: 'villa-shared-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html'
})

export class SharedContactFormComponent {
  submitted = false;
  contactForm: FormGroup;
  ErrorMessage = '';
  messageType = '';
  @Input() type: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', Validators.required],
      message: ['', Validators.required],
      location: ['', Validators.required],
      referredby: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.contactForm.invalid)
    {
      this.contactForm.markAllAsTouched();
      return;
    }

    const params = new URLSearchParams();
    params.set('Action', 'SaveContactForm')
    params.set('type', this.type);
    params.set('name', this.contactForm.get('name')?.value || '')
    params.set('email', this.contactForm.get('email')?.value || '')
    params.set('phonenumber', this.contactForm.get('phonenumber')?.value || '')
    params.set('location', this.contactForm.get('location')?.value || '')
    params.set('referredby', this.contactForm.get('referredby')?.value || '')
    params.set('message', this.contactForm.get('message')?.value || '');

    const BaseUrl = `${environment.apiBaseUrl}/AjaxCall.php`;
    this.http.post(BaseUrl, params.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).subscribe({
      next: (response: any) => {
        this.ErrorMessage = response.Message;
        this.messageType = response.Status;
        if (response.Status === 'success')
        {
          this.contactForm.reset();
        }
        
        setTimeout(() => {
          this.ErrorMessage = '';
          this.messageType = '';
        }, 5000);
      },
      error: (err) => {
        this.ErrorMessage = 'Unable to submit the form. Please try again.';
        this.messageType = 'error';
        this.submitted = false;

        setTimeout(() => {
          this.ErrorMessage = '';
          this.messageType = '';
        }, 5000);
      }
    });
  }
}
