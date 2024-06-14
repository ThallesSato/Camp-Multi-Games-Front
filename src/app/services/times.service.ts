import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Time } from '../interfaces/time';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimesService {
  API_URL: string = 'https://midbot.bsite.net';

  constructor(private http: HttpClient) {}

  getTimes(): Observable<Time[]> {
    return this.http.get<Time[]>(`${this.API_URL}/time`);
  }

  getTimeDetalhe(id: number): Observable<Time> {
    return this.http.get<Time>(`${this.API_URL}/time/${id}`);
  }
}
