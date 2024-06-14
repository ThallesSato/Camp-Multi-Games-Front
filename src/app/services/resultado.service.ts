import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado } from '../interfaces/resultado';
import { Confronto } from '../interfaces/confronto';

@Injectable({
  providedIn: 'root',
})
export class ResultadoService {
  constructor(private http: HttpClient) {}

  API_URL: string = 'https://midbot.bsite.net/passados';
  API_URL_DETALHE: string = 'https://midbot.bsite.net/Confronto';

  getResultados(): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(this.API_URL);
  }

  getResultadoDetalhe(id: number): Observable<Confronto> {
    return this.http.get<Confronto>(`${this.API_URL_DETALHE}/${id}`);
  }

  getConfrontosFuturos(timeId: number) : Observable<Confronto[]> {
    return this.http.get<Confronto[]>(`${this.API_URL_DETALHE}/time/futuros/${timeId}`);
  }

  getConfrontosPassados(timeId: number) : Observable<Confronto[]> {
    return this.http.get<Confronto[]>(`${this.API_URL_DETALHE}/time/passados/${timeId}`);
  }
}
