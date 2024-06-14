import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Confronto } from 'src/app/interfaces/confronto';
import { ResultadoService } from 'src/app/services/resultado.service';

@Component({
  selector: 'app-resultado-detalhe',
  templateUrl: './resultado-detalhe.component.html',
  styleUrls: ['./resultado-detalhe.component.css'],
})
export class ResultadoDetalheComponent implements OnInit {
  idRecebido!: number;
  resultadoDetalhe!: Confronto;

  constructor(
    private router: Router,
    private resultadoService: ResultadoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.idRecebido = this.getId();
    this.getResultadoDetalhe();
  }

  getId(): number {
    return Number(this.router.url.split('/')[2]);
  }

  getResultadoDetalhe() {
    this.resultadoService.getResultadoDetalhe(this.idRecebido).subscribe({
      next: (res: Confronto) => {
        this.resultadoDetalhe = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  navigateDetalhe(id: number) {
    this.router.navigateByUrl(`time-detalhe/${id}`);
  }

  voltar() {
    this.location.back();
  }
}
