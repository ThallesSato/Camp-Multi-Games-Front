import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/interfaces/ranking';
import { RankingFfa } from 'src/app/interfaces/ranking-ffa';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  constructor(private rankingService: RankingService) {}

  rankingGeral: Ranking[] = [];
  rankingFfa: RankingFfa[] = [];
  collapseIds: string[] = [];
  public indexMaxRanking!: number;

  ngOnInit(): void {
    this.getRanking();
    this.indexMaxRanking = Number(localStorage.getItem('maxIndexRanking')) ?? 0;
    this.getRankingFfa();
  }

  getRanking() {
    this.rankingService.getRanking().subscribe({
      next: (response: Ranking[]) => {
        this.rankingGeral = response;
        let indexMax = this.rankingGeral.length;
        localStorage.setItem('maxIndexRanking', indexMax.toString())
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getRankingFfa() {
    this.rankingService.getRankingFfa().subscribe({
      next: (response: RankingFfa[]) => {
        this.rankingFfa = response;
        console.log(this.rankingFfa);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
