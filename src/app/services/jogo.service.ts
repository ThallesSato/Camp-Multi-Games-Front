import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo } from '../interfaces/jogo';
import { HttpClient } from '@angular/common/http';
import { JogoFfa } from '../interfaces/jogo-ffa';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private http: HttpClient) { }

  API_URL: string = 'https://midbot.bsite.net/jogo/tabela';
  API_URL_FFA: string = 'https://midbot.bsite.net/Jogo/ffa';

  getJogos(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(this.API_URL);
  }

  getJogosFfa(): Observable<JogoFfa[]> {
    return this.http.get<JogoFfa[]>(this.API_URL_FFA);
  }
}
