import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributedirectiveRoutingModule } from './attributedirective-routing.module';
import { AttributedirComponent } from './attributedir/attributedir.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AttributedirComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    AttributedirectiveRoutingModule
  ]
})
export class AttributedirectiveModule { }
