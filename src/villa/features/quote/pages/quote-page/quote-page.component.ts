import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { SeoService } from '../../../../services/seo.service';
import { environment } from '../../../../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';

interface QuoteResponse {
  Status: string;
  Message: string;
}

@Component({
  selector: 'villa-quote-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.scss']
})
export class QuotePageComponent {
  quoteForm!: FormGroup;
  ErrorMessage = '';
  messageType = '';
  submitted = false;

  readonly projectFields = [
    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your full name', iconName: 'person' },
    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Enter your phone number', iconName: 'call' },
    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email address', iconName: 'email' },
    { label: 'Country', name: 'country', type: 'text', placeholder: 'Enter your country', iconName: 'public' },
    { label: 'Tent Category', name: 'category', type: 'select', placeholder: 'Select tent category', iconName: 'category' },
    { label: 'Project Location', name: 'location', type: 'text', placeholder: 'Enter project location', iconName: 'location_on' },
    { label: 'Estimated Quantity', name: 'quantity', type: 'text', placeholder: 'Enter estimated quantity', iconName: 'format_list_numbered' },
    { label: 'Project Timeline', name: 'timeline', type: 'date', placeholder: 'Select timeline', iconName: 'date_range' }
  ];

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  constructor(private route: RouterModule, private seoService:SeoService) {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      quantity: ['', Validators.required],
      timeline: ['', Validators.required],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue]
    });
  }

  private ApiService = inject(ApiService);
  pageData: any;
  whyChooseItems: any;
  pageInfo: any;
  topSection: any;
  tentCategories: any;

  ngOnInit() {
    this.ApiService.getPage('Action=GetQuotePage').subscribe(res => {
      this.pageData = res;
      this.pageInfo = this.pageData.Data.Data;
      this.whyChooseItems = this.pageData.Data.WhyChooseItems;
      this.tentCategories = this.pageData.Data.TentCategories;
      this.topSection = this.pageData.Data.TopSection;
      this.seoService.setSEO(this.pageData.Data.SEOInfo);
    });
  }

  submitForm(): void {
    this.submitted = true;
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
      return;
    }
    const params = new URLSearchParams();
    params.set('Action', 'SaveQuoteForm');
    params.set('name', this.quoteForm.get('name')?.value || '');
    params.set('phone', this.quoteForm.get('phone')?.value || '');
    params.set('email', this.quoteForm.get('email')?.value || '');
    params.set('country', this.quoteForm.get('country')?.value || '');
    params.set('category', this.quoteForm.get('category')?.value || '');
    params.set('location', this.quoteForm.get('location')?.value || '');
    params.set('quantity', this.quoteForm.get('quantity')?.value || '');
    params.set('timeline', this.quoteForm.get('timeline')?.value || '');
    params.set('message', this.quoteForm.get('message')?.value || '');

    const BaseUrl = `${environment.apiBaseUrl}/AjaxCall.php`;
    this.http.post<QuoteResponse>(
      BaseUrl,
      params.toString(),
      {
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded'
        }
      }
    ).subscribe({
      next: (response) => {
        console.log(
          'QUOTE RESPONSE:',
          response
        );

        this.ErrorMessage = response.Message;
        this.messageType = response.Status;

        if (response.Status === 'success') {
          this.quoteForm.reset();
          this.submitted = false;
        }

        setTimeout(() => {
          this.ErrorMessage = '';
          this.messageType = '';
        }, 5000);
      },

      error: (error) => {
        console.error(
          'QUOTE ERROR:',
          error
        );

        this.ErrorMessage = 'Unable to submit the form. Please try again.';
        this.messageType = 'error';

        setTimeout(() => {
          this.ErrorMessage = '';
          this.messageType = '';
        }, 5000);
      }
    });
  }

  isInvalid( controlName: string): boolean {
    const control = this.quoteForm.get(controlName);
    return !!control && control.invalid && control.touched;
  }
}
