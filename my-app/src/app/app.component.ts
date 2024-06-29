import { Component, Renderer2, OnDestroy, AfterViewInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from '../components/game/game.component';
import { Game } from './model/game';
import { RawgApiService } from './rawg-api.service'

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< Updated upstream
  imports: [CommonModule, RouterOutlet, MenuComponent, NavbarComponent, FormsModule],
=======
  imports: [CommonModule ,RouterOutlet, MenuComponent, NavbarComponent, FormsModule, GameComponent],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
<<<<<<< Updated upstream
export class AppComponent implements AfterViewInit, OnDestroy {
  private routerEventSubscription!: Subscription;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.routerEventSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.showNavbarAndMenu()) {
          this.renderer.addClass(document.body, 'with-navbar-menu');
        } else {
          this.renderer.removeClass(document.body, 'with-navbar-menu');
        }
      }
    });
  }
=======
export class AppComponent {
  title = 'my-app';
  game = new RawgApiService; 
 
  
  constructor(private router: Router) {
     //GameComponent.insertGame(this.game.getGames())
  };
  
  ngOnInit(): void {
    this.game.getGames().then(resp => {
      GameComponent.insertGame((resp.data.results));
    })
  }
  
>>>>>>> Stashed changes

  showNavbarAndMenu(): boolean {
    const noNavRoutes = ['/', '/forgot-password-screen', '/sign-in-screen'];
    return !noNavRoutes.includes(this.router.url);
<<<<<<< Updated upstream
  }

  ngOnDestroy(): void {
    this.routerEventSubscription.unsubscribe();
  }
=======
    
}
>>>>>>> Stashed changes
}
