import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-to-rent',
  standalone: true,
  imports: [],
  templateUrl: './cards-to-rent.component.html',
  styleUrl: './cards-to-rent.component.css'
})
export class CardsToRentComponent {
  @Input() game: any;
}
