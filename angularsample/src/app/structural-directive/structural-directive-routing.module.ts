import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgifStrDirComponent } from './ngif-str-dir/ngif-str-dir.component';

const routes: Routes = [
    {path: 'ngifcondition', component: NgifStrDirComponent}
];
//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralDirectivRoutingeModule { }
