import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet, MenuComponent, NavbarComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private router: Router) {};

  showNavbarAndMenu(): boolean {
    const noNavRoutes = ['/ ', '/forgot-password-screen', '/sign-in-screen'];
    return !noNavRoutes.includes(this.router.url);
}
}
