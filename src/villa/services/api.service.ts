import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  timeout,
  tap,
  catchError
} from 'rxjs';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  readonly BaseUrl = environment.apiBaseUrl;

  getPage(api: string) {

  const url = `${this.BaseUrl}?${api}`;

  return this.http.get(url).pipe(
    tap(() => {
    }),
    timeout(10000),
    catchError(error => {
      console.error('[API ERROR]', url, error);
      throw error;
    })
  );
}
}