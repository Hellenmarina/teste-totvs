import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { Tarefas } from '../Tarefas';

@Injectable({
  providedIn: 'root',
})
export class TarefasService {
  private baseUrl = environment.baseURL;
  private url = `${this.baseUrl}tarefas`;

  constructor(private http: HttpClient) {}

  getAllTarefas(): Observable<Tarefas[]> {
    return this.http.get<Tarefas[]>(this.url);
  }

  createTarefa(formData: FormData) {
    return this.http.post<FormData>(this.url, formData).pipe(take(1));
  }

  editTarefa(id: number) {
    return this.http.get(`${this.url}/${id}`).pipe(take(1));
  }

  updateTarefa(id: number, formData: FormData) {
    const urlId = `${this.baseUrl}tarefas/${id}`;
    return this.http.put<FormData>(urlId, formData).pipe(take(1));
  }

  removeTarefa(id: number) {
    const urlId = `${this.baseUrl}tarefas/${id}`;
    return this.http.delete(urlId);
  }
}
