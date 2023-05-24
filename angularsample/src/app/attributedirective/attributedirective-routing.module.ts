import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributedirComponent } from './attributedir/attributedir.component';

const routes: Routes = [ {path: 'attributedirective', component: AttributedirComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributedirectiveRoutingModule { }
