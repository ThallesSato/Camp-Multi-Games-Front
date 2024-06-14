import { Component } from '@angular/core';
import { Jogo } from 'src/app/interfaces/jogo';
import { JogoFfa } from 'src/app/interfaces/jogo-ffa';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css'],
})
export class JogosComponent {
  constructor(private jogoService: JogoService) {}

  ngOnInit(): void {
    this.getJogos();
    this.getJogosFfa();
  }

  jogos: Jogo[] = [];
  jogosFfa: JogoFfa[] = [];

  getJogos() {
    this.jogoService.getJogos().subscribe({
      next: (jogos: Jogo[]) => {
        this.jogos = jogos;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getJogosFfa() {
    this.jogoService.getJogosFfa().subscribe({
      next: (jogos: JogoFfa[]) => {
        this.jogosFfa = jogos;
        console.log(this.jogosFfa)
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
