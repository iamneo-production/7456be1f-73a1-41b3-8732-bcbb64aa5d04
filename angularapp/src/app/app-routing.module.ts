import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVenueComponent } from './create-venue/create-venue.component';
import { UpdateVenueComponent } from './update-venue/update-venue.component';
import { VenueDetailsComponent } from './venue-details/venue-details.component';
import { VenueListComponent } from './venue-list/venue-list.component';

const routes: Routes = [
  {path: 'venues', component: VenueListComponent},
  {path: 'create-venue', component: CreateVenueComponent},
  {path: '', redirectTo: 'venues', pathMatch: 'full'},
  {path: 'update-venue/:id', component: UpdateVenueComponent},
  {path: 'venue-details/:id', component: VenueDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
