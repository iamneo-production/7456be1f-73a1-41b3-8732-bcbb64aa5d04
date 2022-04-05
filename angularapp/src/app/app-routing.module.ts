import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminvenueComponent } from './admin/adminvenue/adminvenue.component';
import { EditvenueComponent } from './admin/adminvenue/editvenue/editvenue.component';
import { VenueComponent } from './admin/adminvenue/venue/venue.component';


const routes: Routes = [
  
  { path: 'admin/Venue', component: AdminvenueComponent },
  { path: 'admin/addVenue', component: VenueComponent  },
  { path: 'admin/editVenue/:id', component: EditvenueComponent },
 
  

  { path: '', redirectTo: '/login', pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
