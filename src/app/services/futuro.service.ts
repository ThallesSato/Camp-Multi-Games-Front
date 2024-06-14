import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JogosFuturos} from "../interfaces/jogos-futuros";

@Injectable({
  providedIn: 'root'
})
export class FuturoService {

  constructor(private http: HttpClient) { }

  API_URL: string = 'https://midbot.bsite.net/futuros';

  getFuturos(): Observable<JogosFuturos[]> {
    return this.http.get<JogosFuturos[]>(this.API_URL);
  }
}
