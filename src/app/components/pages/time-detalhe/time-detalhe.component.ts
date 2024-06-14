import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Time } from 'src/app/interfaces/time';
import { TimesService } from 'src/app/services/times.service';
import { Location } from '@angular/common';
import { ResultadoService } from 'src/app/services/resultado.service';
import { Confronto } from 'src/app/interfaces/confronto';

@Component({
  selector: 'app-time-detalhe',
  templateUrl: './time-detalhe.component.html',
  styleUrls: ['./time-detalhe.component.css'],
})
export class TimeDetalheComponent {
  idRecebido!: number;
  timeDetalhe!: Time;
  confrontosPassados!: Confronto[];
  confrontosFuturos!: Confronto[];

  constructor(
    private router: Router,
    private timeService: TimesService,
    private resultadoService: ResultadoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.idRecebido = this.getId();
    this.getTimeDetalhe();
    this.getConfrontosPassados();
    this.getConfrontosFuturos();
  }

  getId(): number {
    return Number(this.router.url.split('/')[2]);
  }

  getTimeDetalhe() {
    this.timeService.getTimeDetalhe(this.idRecebido).subscribe({
      next: (res: Time) => {
        this.timeDetalhe = res;
        console.log(this.timeDetalhe)
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getConfrontosPassados() {
    this.resultadoService.getConfrontosPassados(this.idRecebido).subscribe({
      next: (res: Confronto[]) => {
        this.confrontosPassados = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getConfrontosFuturos() {
    this.resultadoService.getConfrontosFuturos(this.idRecebido).subscribe({
      next: (res: Confronto[]) => {
        this.confrontosFuturos = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  navigateDetalhe(id: number) {
    this.router.navigateByUrl(`resultado-detalhe/${id}`);
  }
}
