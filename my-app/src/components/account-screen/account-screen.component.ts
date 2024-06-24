import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../app/model/user';
import { WebStorageUtil } from '../../app/util/web-storage-util';
import { FormsModule } from '@angular/forms';
import { Shared } from '../../app/util/shared';
import { Constants } from '../../app/util/constants';

@Component({
  selector: 'app-account-screen',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './account-screen.component.html',
  styleUrl: './account-screen.component.css'
})


export class AccountScreenComponent {
  constructor(private router: Router) {}
  logOut(){
    localStorage.setItem(Constants.LOGGED_IN_KEY, String(false));
    this.router.navigate(['']);
  }
}
