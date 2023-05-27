import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiservicesRoutingModule } from './apiservices-routing.module';
import { RestapiComponent } from './restapi/restapi.component';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RestapiservicesService } from './../restapiservices.service';

@NgModule({
  declarations: [
    RestapiComponent
  ],
  imports: [
    CommonModule,
    ApiservicesRoutingModule,
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [HttpClient, RestapiservicesService],

})
export class ApiservicesModule { }
