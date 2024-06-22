import { Routes } from '@angular/router';
import { StartScreenComponent } from '../components/start-screen/start-screen.component';
import { BrowseScreenComponent } from '../components/browse-screen/browse-screen.component';
import { AccountScreenComponent } from '../components/account-screen/account-screen.component';
import { CouchplayScreenComponent } from '../components/couchplay-screen/couchplay-screen.component';
import { RentedScreenComponent } from '../components/rented-screen/rented-screen.component';

export const routes: Routes = [
    {path: 'start-screen', component: StartScreenComponent},
    {path: 'browse-screen', component: BrowseScreenComponent},
    {path: 'account-screen', component: AccountScreenComponent},
    {path: 'couchplay-screen', component: CouchplayScreenComponent},
    {path: 'rented-screen', component: RentedScreenComponent}
];
