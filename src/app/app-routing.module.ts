import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./componets/login/login.component";
import {NotFoundComponent} from "./componets/not-found/not-found.component";
import {DashboardComponent} from "./componets/dashboard/dashboard.component";
import {DashboardGuard} from "./guards/dashboard.guard";
import {SaveItemPageComponent} from "./componets/dashboard/items/save-item-page/save-item-page.component";
import {UpdateItemPageComponent} from "./componets/dashboard/items/update-item-page/update-item-page.component";
import {DeleteItemPageComponent} from "./componets/dashboard/items/delete-item-page/delete-item-page.component";
import {SearchItemPageComponent} from "./componets/dashboard/items/search-item-page/search-item-page.component";

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[DashboardGuard],children:[
      {path:'save-item',component:SaveItemPageComponent},
      {path:'update-item',component:UpdateItemPageComponent},
      {path:'delete-item',component:DeleteItemPageComponent},
      {path:'search-item',component:SearchItemPageComponent}
    ]},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
