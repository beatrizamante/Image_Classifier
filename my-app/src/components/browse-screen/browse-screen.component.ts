import { Component } from '@angular/core';
import { CardsComponent } from "../cards_list/cards.component";
import { CommonModule } from '@angular/common';
import { RawgApiService } from '../../app/rawg-api.service';
import { CardsToRentComponent } from "../cards-to-rent/cards-to-rent.component";

@Component({
    selector: 'app-browse-screen',
    standalone: true,
    templateUrl: './browse-screen.component.html',
    styleUrl: './browse-screen.component.css',
    imports: [CommonModule, CardsToRentComponent]
})
export class BrowseScreenComponent {
  games: any[] = [];

  constructor(private rawgService: RawgApiService) {}

  ngOnInit(): void {
    this.rawgService.getGames().then((response: { data: { results: any[]; }; }) => {
      this.games = response.data.results;
      console.log(this.games)
    }).catch((error: any) => {
      console.error('Failed to fetch games', error);
    });
  }
}


