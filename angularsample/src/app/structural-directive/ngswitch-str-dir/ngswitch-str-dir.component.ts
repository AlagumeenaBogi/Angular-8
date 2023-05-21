import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch-str-dir',
  templateUrl: './ngswitch-str-dir.component.html',
  styleUrls: ['./ngswitch-str-dir.component.css']
})
//  class item {  
//    name: string;  
//    val: number;  
//  }  
export class NgswitchStrDirComponent {
 // items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
  //  selectedValue: string= 'One';  
// so the way ngSwitch works with muliple conditions and ors, you need to set ngSwitch=true and
	// then check your variable for the conditions within the *ngSwitchCase
  tester = 'that';
  //tester = 'other';
  //tester = 'not going to find this';
}
