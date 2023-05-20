import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifStrDirComponent } from './ngif-str-dir/ngif-str-dir.component';
import { StructuralDirectivRoutingeModule } from './structural-directive-routing.module';



@NgModule({
  declarations: [
    NgifStrDirComponent
  ],
  imports: [
    CommonModule,
    StructuralDirectivRoutingeModule
  ]
})
export class StructuralDirectiveModule { }
