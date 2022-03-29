import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'teams',component: EmployeeListComponent},
  {path: 'create-team',component: CreateEmployeeComponent},
  {path:'', redirectTo: 'teams', pathMatch: 'full'},
  {path:'update-team/:id',component:UpdateEmployeeComponent},
  {path: 'team-details/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }