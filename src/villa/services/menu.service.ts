import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MenuItem } from '../models/menu-item.interface';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuData: any;
  private allItems: any[] = [];
  private ApiService = inject(ApiService);

  private flatMap = new Map<string, any>();

  private http = inject(HttpClient);
  resortTents: any[] = [];
  projects: any[] = [];

  private menuSubject = new BehaviorSubject<any>(null);
  menu$ = this.menuSubject.asObservable();

  private socialMediaSubject = new BehaviorSubject<any>(null);
  private contactInfoSubject = new BehaviorSubject<any>(null);
  private headerInfoSubject = new BehaviorSubject<any>(null);

  socialMedia$ = this.socialMediaSubject.asObservable();
  contactInfo$ = this.contactInfoSubject.asObservable();
  headerInfo$ = this.headerInfoSubject.asObservable();

  setSocialMedia(data: any): void {
    this.socialMediaSubject.next(data);
  }

  setContactInfo(data: any): void {
    this.contactInfoSubject.next(data);
  }

  setHeaderInfo(data: any): void {
    this.headerInfoSubject.next(data);
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
  
  getMenus(): Observable<any> {
    const cacheBuster = `_=${Date.now()}`;
    return this.ApiService.getPage(`Action=GetURLs&${cacheBuster}`);
    // return this.http.get<any>(`?Action=GetURLs&${cacheBuster}`);
  }

  setMenu(data: any) {
    this.menuData = data;
    this.menuSubject.next(this.menuData);
    const rootItems = Object.values(this.menuData);
    this.allItems = this.flatten(rootItems);
  }

  findSlug(slug: string): any {
    return this.allItems.find(item => item.slug === slug);
  }

  private flatten(items: any[]): any[] {
    return items.flatMap(item => [
      item,
      ...(item.children ? this.flatten(item.children) : [])
    ]);
  }
}