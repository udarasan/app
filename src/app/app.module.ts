import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import {RouterModule} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { SaveItemPageComponent } from './componets/dashboard/items/save-item-page/save-item-page.component';
import { DeleteItemPageComponent } from './componets/dashboard/items/delete-item-page/delete-item-page.component';
import { UpdateItemPageComponent } from './componets/dashboard/items/update-item-page/update-item-page.component';
import { SearchItemPageComponent } from './componets/dashboard/items/search-item-page/search-item-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    SaveItemPageComponent,
    DeleteItemPageComponent,
    UpdateItemPageComponent,
    SearchItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
