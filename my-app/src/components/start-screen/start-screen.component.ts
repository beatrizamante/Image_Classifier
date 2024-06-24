import { Component, OnInit } from '@angular/core';
import { RawgApiService } from '../../app/rawg-api.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-start-screen',
    standalone: true,
    templateUrl: './start-screen.component.html',
    styleUrl: './start-screen.component.css',
    imports: [CommonModule]
})
export class StartScreenComponent implements OnInit{
  games: any[] = [];

  constructor(private rawgService: RawgApiService) {}

  ngOnInit(): void {
    this.rawgService.getGames().then(response => {
      this.games = response.data.results;
      console.log(this.games)
    }).catch(error => {
      console.error('Failed to fetch games', error);
    });
  }
}
