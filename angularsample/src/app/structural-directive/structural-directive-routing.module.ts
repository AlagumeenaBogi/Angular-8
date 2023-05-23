import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgifStrDirComponent } from './ngif-str-dir/ngif-str-dir.component';
import { NgswitchStrDirComponent } from './ngswitch-str-dir/ngswitch-str-dir.component';
import { NgforStrDirComponent } from './ngfor-str-dir/ngfor-str-dir.component';
const routes: Routes = [
    {path: 'ngifcondition', component: NgifStrDirComponent},
    {path: 'ngswitchcondition', component: NgswitchStrDirComponent},
    {path: 'ngforcondition', component: NgforStrDirComponent}
];
//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralDirectivRoutingeModule { }
