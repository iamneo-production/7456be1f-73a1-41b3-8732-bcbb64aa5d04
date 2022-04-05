import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminvenueComponent } from './admin/adminvenue/adminvenue.component';

import { VenueComponent } from './admin/adminvenue/venue/venue.component';
import { EditvenueComponent } from './admin/adminvenue/editvenue/editvenue.component';


import { VenueService } from './service/venue.service';




@NgModule({
  declarations: [
    AppComponent,
    
    AdminvenueComponent,
    
    VenueComponent,
    EditvenueComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    
     
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
