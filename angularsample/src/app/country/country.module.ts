import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryviewComponent } from './countryview/countryview.component';
import { CountrynewComponent } from './countrynew/countrynew.component';



@NgModule({
  declarations: [
    CountryviewComponent,
    CountrynewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
