import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-str-dir',
  templateUrl: './ngif-str-dir.component.html',
  styleUrls: ['./ngif-str-dir.component.css']
})
export class NgifStrDirComponent {
  courses = [0];
  isLogIn : boolean = false;
  isLogOut : boolean = true; 
  show: boolean = true;  
  condition: boolean = true;  
}
