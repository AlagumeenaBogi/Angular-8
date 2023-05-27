import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestapiComponent } from './restapi/restapi.component';

const routes: Routes = [ {path: 'apiservicedisplay', component: RestapiComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiservicesRoutingModule { }
