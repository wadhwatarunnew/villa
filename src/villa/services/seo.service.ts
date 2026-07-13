import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta
  ) {}


  setSEO(seo: any) {
    console.log("seo === ", seo);
    if (!seo) {
      return;
    }

    this.title.setTitle(seo.title);

    this.meta.updateTag({
      name: 'description',
      content: seo.content
    });

    this.meta.updateTag({
      name: 'keywords',
      content: seo.keyword
    });

    // Social sharing
    this.meta.updateTag({
      property: 'og:title',
      content: seo.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: seo.content
    });

    this.meta.updateTag({
      property: 'og:image',
      content: seo.image
    });
  }
}