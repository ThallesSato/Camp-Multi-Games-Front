import { Component } from '@angular/core';
import { RankingFfa } from 'src/app/interfaces/ranking-ffa';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-ranking-ffa',
  templateUrl: './ranking-ffa.component.html',
  styleUrls: ['./ranking-ffa.component.css'],
})
export class RankingFfaComponent {
  constructor(private rankingService: RankingService) {}

  rankingFfa: RankingFfa[] = [];
  collapseIds: string[] = [];
  public indexMaxRanking!: number;

  ngOnInit(): void {
    this.indexMaxRanking = Number(localStorage.getItem('maxIndexRanking')) ?? 0;
    this.getRankingFfa();
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
