import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipessRoutingModule } from './pipess-routing.module';
import { PipesComponent } from './pipes/pipes.component';


@NgModule({
  declarations: [
    PipesComponent
  ],
  imports: [
    CommonModule,
    PipessRoutingModule
  ]
})
export class PipessModule { }
