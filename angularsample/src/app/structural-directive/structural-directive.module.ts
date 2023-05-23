import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms'; //import FormsModule here

import { StructuralDirectivRoutingeModule } from './structural-directive-routing.module';
import { NgifStrDirComponent } from './ngif-str-dir/ngif-str-dir.component';
import { NgswitchStrDirComponent } from './ngswitch-str-dir/ngswitch-str-dir.component';
import { NgforStrDirComponent } from './ngfor-str-dir/ngfor-str-dir.component';

@NgModule({
  declarations: [
    NgifStrDirComponent,
    NgswitchStrDirComponent,
    NgforStrDirComponent
  ],
  imports: [
    CommonModule,
   StructuralDirectivRoutingeModule,
   //FormsModule
  ]
})
export class StructuralDirectiveModule { }
