import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminrefereeComponent } from './admin/adminreferee/adminreferee.component';
import { EditrefereeComponent } from './admin/adminreferee/editreferee/editreferee.component';
import { RefereeComponent } from './admin/adminreferee/referee/referee.component';
import { LoginComponent } from './login/login.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AdminuserComponent } from './admin/adminuser/adminuser.component';
import { UserComponent } from './admin/adminuser/user/user.component';
import { EdituserComponent } from './admin/adminuser/edituser/edituser.component';
@NgModule({
  declarations: [
    AppComponent,
    
    AdminrefereeComponent,
    EditrefereeComponent,
    RefereeComponent,
    LoginComponent,
    SearchFilterPipe,
    SignupComponent,
    AdminuserComponent,
    UserComponent,
    EdituserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    NgxPaginationModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
