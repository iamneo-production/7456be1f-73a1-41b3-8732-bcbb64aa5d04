import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { CreateVenueComponent } from './create-venue/create-venue.component';
import { FormsModule } from '@angular/forms';
import { UpdateVenueComponent } from './update-venue/update-venue.component';
import { VenueDetailsComponent } from './venue-details/venue-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VenueListComponent,
    CreateVenueComponent,
    UpdateVenueComponent,
    VenueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
