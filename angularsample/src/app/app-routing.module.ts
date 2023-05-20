import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { reactiveComponent } from './reactive/reactive.component'; //TINP 17052023 Reactive form

const routes: Routes = [
    {path: 'template-driven', component: TemplateDrivenComponent},
    {path: 'reactive', component: reactiveComponent} //TINP 17052023 Reactive form
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }