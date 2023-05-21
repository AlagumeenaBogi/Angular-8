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

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    reactiveComponent,
    MustMatchDirective,
    CountryaddComponent,
   NgifStrDirComponent,
    NgswitchStrDirComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountryRoutingModule,
    ReactiveFormsModule,
    StructuralDirectivRoutingeModule,
   // NgForm,
    FormsModule  //Assign FormsModule
   /* RouterModule.forRoot([
      {path: 'template-driven', component: TemplateDrivenComponent},
    ]),  */  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


