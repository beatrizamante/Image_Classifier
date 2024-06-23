import { RouterModule, Routes } from '@angular/router';
import { StartScreenComponent } from '../components/start-screen/start-screen.component';
import { BrowseScreenComponent } from '../components/browse-screen/browse-screen.component';
import { AccountScreenComponent } from '../components/account-screen/account-screen.component';
import { CouchplayScreenComponent } from '../components/couchplay-screen/couchplay-screen.component';
import { RentedScreenComponent } from '../components/rented-screen/rented-screen.component';
import { LoginScreenComponent } from '../components/login-screen/login-screen.component';
import { AuthenticationGuard } from '../app/util/authentication.guard' 
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path: '', component: LoginScreenComponent},
    {path: 'start-screen', component: StartScreenComponent, canActivate: [AuthenticationGuard]},
    {path: 'browse-screen', component: BrowseScreenComponent, canActivate: [AuthenticationGuard]},
    {path: 'account-screen', component: AccountScreenComponent, canActivate: [AuthenticationGuard]},
    {path: 'couchplay-screen', component: CouchplayScreenComponent, canActivate: [AuthenticationGuard]},
    {path: 'rented-screen', component: RentedScreenComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    //imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
    providers: [AuthenticationGuard],
  })
  
  export class AppRoutingModule {}