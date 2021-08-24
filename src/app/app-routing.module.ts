import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardBidderComponent } from './board-bidder/board-bidder.component';
import { BoardAuctioneerComponent } from './board-auctioneer/board-auctioneer.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {AuthGuardService as AuthGuard} from "./_services/auth-guard.service";
import {RoleGuardService as RoleGuard} from "./_services/role-guard.service";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'bidder', component: BoardBidderComponent , canActivate: [AuthGuard]},
  { path: 'auctioneer', component: BoardAuctioneerComponent , canActivate: [AuthGuard, RoleGuard],  data: {
      expectedRole: 'AUCTIONEER'
    } },
  { path: 'admin', component: BoardAdminComponent , canActivate: [AuthGuard, RoleGuard],  data: {
      expectedRole: 'ADMIN'
    }  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
