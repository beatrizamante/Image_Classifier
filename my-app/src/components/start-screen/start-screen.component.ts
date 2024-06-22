import { Component, OnInit } from '@angular/core';
import { RawgApiService } from '../../app/rawg-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.css'
})
export class StartScreenComponent implements OnInit{
  games: any[] = [];

  constructor(private rawgService: RawgApiService) {}

  ngOnInit(): void {
    this.rawgService.getGames().then(response => {
      this.games = response.data.results;
      console.log(this.games);
    }).catch(error => {
      console.error('Erro ao carregar jogos', error);
    });
  }
}
