import { Component } from '@angular/core';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  
  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n');
  }
}
