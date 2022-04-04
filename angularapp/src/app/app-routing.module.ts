import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminrefereeComponent } from './admin/adminreferee/adminreferee.component';
import { EditrefereeComponent } from './admin/adminreferee/editreferee/editreferee.component';
import { RefereeComponent } from './admin/adminreferee/referee/referee.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'admin/referee', component: AdminrefereeComponent, canActivate: [AuthGuard] },
  { path: 'admin/addReferee', component: RefereeComponent, canActivate: [AuthGuard] },
  { path: 'admin/editreferee/:id', component: EditrefereeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
