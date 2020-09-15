import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {ServiceService} from './register/service.service';
import { AppRoutingModule } from './app-routing.module';
import {RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { AddTreatmentRecordComponent } from './add-treatment-record/add-treatment-record.component';
@NgModule({
  declarations: [
    AppComponent, RegisterComponent, HomeComponent, HeaderComponent, LoginComponent, AddTreatmentRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule

  ],

  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
