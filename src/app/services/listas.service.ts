import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listas } from '../Listas';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListasService {
  private baseUrl = environment.baseURL;
  private url = `${this.baseUrl}listas`;

  constructor(private http: HttpClient) {}

  createList(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.url, formData);
  }
}
