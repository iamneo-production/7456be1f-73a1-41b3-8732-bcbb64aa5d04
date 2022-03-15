import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrefereeComponent } from './addreferee/addreferee.component';
import { RefereeListComponent } from './referee-list/referee-list.component';
import { UpdateRefereeComponent } from './update-referee/update-referee.component';
const routes: Routes = [
  {path : 'add-referee', component :  AddrefereeComponent},
  {path : 'view-referee' , component : RefereeListComponent},
  {path: 'update-referee/:id',component : UpdateRefereeComponent},
  {path : '' , component: AddrefereeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
