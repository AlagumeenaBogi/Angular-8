import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-str-dir',
  templateUrl: './ngfor-str-dir.component.html',
  styleUrls: ['./ngfor-str-dir.component.css']
})
export class NgforStrDirComponent {

  fetchData = [{"title":"saurabh","description":"dd","tagline":"tt","date":"dd"},{"title":"aman","description":"dd","tagline":"tt","date":"dd"},{"title":"jessica","description":"dd","tagline":"tt","date":"dd"},{"title":"rosh","description":"dd","tagline":"tt","date":"dd"}];

  // myJson: string;
  // myJson2: string[];
  
  // ngOnInit(){
  //   this.myJson = `[{
  //                   "LastName": "ALAN ORLEBEKE1                 ",
  //                   "Symbol": "CPH"                 
  //                 },
  //                 {
  //                   "LastName": "ALAN ORLEBEKE2                 ",
  //                   "Symbol": "CPH"                  
  //                 }]`;

  //   //convert the JSON string into JSON object
  //   this.myJson2 = JSON.parse(this.myJson);
              //  }
}
