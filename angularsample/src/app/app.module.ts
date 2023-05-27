import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //import FormsModule here

import { AppComponent } from './app.component';
import { MustMatchDirective } from './_helpers/must-match.directive';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { reactiveComponent } from './reactive/reactive.component';
//import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CountryRoutingModule } from './country/country-routing.module';
//import {  NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryaddComponent } from './countryadd/countryadd.component';
import { NgifStrDirComponent } from './structural-directive/ngif-str-dir/ngif-str-dir.component';
import { StructuralDirectivRoutingeModule } from './structural-directive/structural-directive-routing.module';
import { NgswitchStrDirComponent } from './structural-directive/ngswitch-str-dir/ngswitch-str-dir.component';
import { NgforStrDirComponent } from './structural-directive/ngfor-str-dir/ngfor-str-dir.component';
import { AttributedirectiveRoutingModule } from './attributedirective/attributedirective-routing.module';
import { AttributedirComponent } from './attributedirective/attributedir/attributedir.component';
import { PipescomComponent } from './pipescom/pipescom.component';

import { PipessRoutingModule } from './pipess/pipess-routing.module';
import { PipesComponent } from './pipess/pipes/pipes.component';

//mport { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { RestapiComponent } from './restapi/restapi.component';


import { ApiservicesRoutingModule } from './apiservices/apiservices-routing.module';
import { RestapiservicesService } from './apiservices/restapiservices.service';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    reactiveComponent,
    MustMatchDirective,
    CountryaddComponent,
   NgifStrDirComponent,
    NgswitchStrDirComponent,
    NgforStrDirComponent,
    AttributedirComponent,
    PipescomComponent,
    PipesComponent,
    RestapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountryRoutingModule,
    ReactiveFormsModule,
    StructuralDirectivRoutingeModule,
    AttributedirectiveRoutingModule,
    PipessRoutingModule, 
    HttpClientModule,
    ApiservicesRoutingModule,
   // NgForm,
    FormsModule  //Assign FormsModule
   /* RouterModule.forRoot([
      {path: 'template-driven', component: TemplateDrivenComponent},
    ]),  */  
    
  ],
  providers: [RestapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }


