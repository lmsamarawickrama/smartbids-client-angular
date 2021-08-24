import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardAuctioneerComponent } from './board-auctioneer/board-auctioneer.component';
import { BoardBidderComponent } from './board-bidder/board-bidder.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ItemEditorComponent } from './item-editor/item-editor.component';
import { ItemTableComponent } from './item-table/item-table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemBidsComponent } from './item-bids/item-bids.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardAuctioneerComponent,
    BoardBidderComponent,
    ItemEditorComponent,
    ItemTableComponent,
    ItemBidsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [ ItemBidsComponent ]
})
export class AppModule { }
