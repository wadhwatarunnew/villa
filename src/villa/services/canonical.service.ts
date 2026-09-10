import { Injectable, inject, DOCUMENT } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {

  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);

  private readonly baseUrl = 'http://app.thevillatent.com';

  init(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.setCanonical(event.urlAfterRedirects);
      });
  }

  private setCanonical(url: string): void {

    // Remove query string
    const cleanUrl = url.split('?')[0].split('#')[0];

    // Avoid trailing slash except homepage
    const path =
      cleanUrl !== '/' ? cleanUrl.replace(/\/$/, '') : '/';

    const canonicalUrl = `${this.baseUrl}${path}`;

    let link = this.document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }

    link.href = canonicalUrl;
  }
}