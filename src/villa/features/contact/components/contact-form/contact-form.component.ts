import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'villa-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent {
  @Input() topSection: any = {};
  
  submitted = false;
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', Validators.required],
      message: ['', Validators.required]
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
    .set('reference', this.contactForm.value.reference || '')
    .set('message', this.contactForm.value.message || '');
    
    this.http.get(
      'http://local.villatent.com:8081/AjaxCall.php',
      { params }
    )
    .subscribe({
      next: () => {
        this.submitted = true;
        this.contactForm.reset();
      },
      error: (err) => {
        console.error('Submission failed', err);
      }
    });
  }
}
