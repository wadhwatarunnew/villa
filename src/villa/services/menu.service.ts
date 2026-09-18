import { Injectable, inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, shareReplay, tap, take } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  pageData: any;
  private apiService = inject(ApiService);

  private menuData: any = null;
  private allItems: any[] = [];

  private menuSubject =
    new BehaviorSubject<any | null>(null);

  readonly menu$ =
    this.menuSubject.asObservable();

  private menusRequest$?: Observable<any>;

  private socialMediaSubject =
    new BehaviorSubject<any>(null);

  private contactInfoSubject =
    new BehaviorSubject<any>(null);

  private headerInfoSubject =
    new BehaviorSubject<any>(null);

  readonly socialMedia$ =
    this.socialMediaSubject.asObservable();

  readonly contactInfo$ =
    this.contactInfoSubject.asObservable();

  readonly headerInfo$ =
    this.headerInfoSubject.asObservable();


  getMenus(): Observable<any> {

    if (!this.menusRequest$) {

      const cacheBuster = `_=${Date.now()}`;

      this.menusRequest$ =
        this.apiService
          .getPage(
            `Action=GetURLs&${cacheBuster}`
          )
          .pipe(

            tap(response => {
              this.pageData = response;
              const data = this.pageData?.data;

              if (!data) {
                throw new Error(
                  'Menu API returned no data'
                );
              }

              this.setMenu(data);

              this.socialMediaSubject.next(
                data?.SocialMedia ?? null
              );

              this.contactInfoSubject.next(
                data?.ContactInfo ?? null
              );

              this.headerInfoSubject.next(
                data?.HeaderInfo ?? null
              );
            }),

            shareReplay(1)
          );
    }

    return this.menusRequest$;
  }

  setMenu(data: any) {
    this.menuData = data;

    const rootItems = Object.values(this.menuData);
    this.allItems = this.flatten(rootItems);
    this.menuSubject.next(this.menuData);
  }

  findSlug(slug: string): any {
    return this.allItems.find(
      item => item?.slug === slug
    );
  }

  waitForMenu(): Observable<any> {
    return this.menu$.pipe(
      filter(menu => menu !== null),
      take(1)
    );
  }

  getSocialMedia(): any {
    return this.socialMediaSubject.value;
  }

  getContactInfo(): any {
    return this.contactInfoSubject.value;
  }

  getHeaderInfo(): any {
    return this.headerInfoSubject.value;
  }

  private flatten(items: any): any[] {

    if (!items) {
      return [];
    }

    const list =
      Array.isArray(items)
        ? items
        : [items];

    return list.flatMap(item => {

      if (!item || typeof item !== 'object') {
        return [];
      }

      return [
        item,
        ...(item.children
          ? this.flatten(item.children)
          : [])
      ];
    });
  }
}