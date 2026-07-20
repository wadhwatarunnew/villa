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

  // Replace with your API endpoint
  private apiUrl = 'http://local.villatent.com:8081/AjaxCall.php?Action=GetURLs';
  
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