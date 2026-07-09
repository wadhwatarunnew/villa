import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private http = inject(HttpClient);
    private BaseUrl = 'http://local.villatent.com:8081/AjaxCall.php';

    getBySlug(slug: string) {
      return this.http.get<any>(`http://local.villatent.com:8081/AjaxCall.php?Action=GetTents/slug=${slug}`);
    }

    getPage(api: string) {
      return this.http.get(`http://local.villatent.com:8081/AjaxCall.php?${api}`);
    }
}