import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'villa-contact-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-location.component.html',
  styleUrls: ['./contact-location.component.scss']
})

export class ContactLocationComponent {
  @Input() addressInfo: any = {};
  googleMapUrl!: SafeResourceUrl;

  private sanitizer = inject(DomSanitizer);
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['addressInfo'] && this.addressInfo?.google_map)
    {
      this.googleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.addressInfo.google_map);
    }
  }
}
