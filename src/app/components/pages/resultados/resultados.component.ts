import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resultado } from 'src/app/interfaces/resultado';
import { ResultadoService } from 'src/app/services/resultado.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent implements OnInit {

  resultados: Resultado[] = [];

  ngOnInit(): void {
    this.getResultados();
  }

  constructor(private resultadoService: ResultadoService, private router: Router) {}

  getResultados() {
    this.resultadoService.getResultados().subscribe({
      next: (res: Resultado[]) => {
        this.resultados = res;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  navigateDetalhe(id: number) {
    this.router.navigateByUrl(`resultado-detalhe/${id}`);
  }
}
