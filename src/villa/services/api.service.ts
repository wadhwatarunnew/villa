import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item.interface';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private http = inject(HttpClient);
    readonly BaseUrl = `${environment.apiBaseUrl}`;

    getBySlug(slug: string) {
      return this.http.get<any>(`${this.BaseUrl}/AjaxCall.php}?Action=GetTents/slug=${slug}`);
    }

    getPage(api: string) {
      return this.http.get(`${this.BaseUrl}/AjaxCall.php?${api}`);
    }
}