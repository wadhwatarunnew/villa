import { Component, Input, OnInit, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { SeoService } from '../../../../services/seo.service';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ContactHeroComponent } from '../../components/contact-hero/contact-hero.component';
import { ContactInfoCardsComponent } from '../../components/contact-info-cards/contact-info-cards.component';
import { ContactLocationComponent } from '../../components/contact-location/contact-location.component';

@Component({
  selector: 'villa-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    ContactHeroComponent,
    ContactInfoCardsComponent,
    ContactFormComponent,
    ContactLocationComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  pageData: any;
    
  constructor(private route: RouterModule, private seoService:SeoService) {}
  private ApiService = inject(ApiService);

  ngOnInit() {
    this.ApiService.getPage('Action=GetContactPage').subscribe(res => {
      this.pageData = res;
      this.seoService.setSEO(this.pageData.Data.SEOInfo);
    });
  }
}
