import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryviewComponent } from './countryview/countryview.component';
import { CountrynewComponent } from './countrynew/countrynew.component';
//const routes: Routes = [];

const routes: Routes = [
  {path: 'countryview', component: CountryviewComponent},
  {path: 'contrynew', component: CountrynewComponent} //TINP 17052023 New Router 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
