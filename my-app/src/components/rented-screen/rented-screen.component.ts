import { Component } from '@angular/core';
import { CardsComponent } from "../cards_list/cards.component";
import { CommonModule } from '@angular/common';
import { RawgApiService } from '../../app/rawg-api.service';
<<<<<<< Updated upstream
import { FilterComponent } from "../filter/filter.component";
=======
import { GameComponent } from '../game/game.component';
>>>>>>> Stashed changes

@Component({
    selector: 'app-rented-screen',
    standalone: true,
    templateUrl: './rented-screen.component.html',
    styleUrl: './rented-screen.component.css',
    imports: [CardsComponent, CommonModule, FilterComponent]
})
export class RentedScreenComponent {
  games: any[] = [];

  constructor(private rawgService: RawgApiService) {}

  ngOnInit(): void {
    this.games = GameComponent.getGames();
    
    /*this.rawgService.getGames().then((response: { data: { results: any[]; }; }) => {
      this.games = response.data.results;
      console.log(this.games)
    }).catch((error: any) => {
      console.error('Failed to fetch games', error);
    });*/
  }
}
