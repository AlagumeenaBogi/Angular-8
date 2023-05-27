import { Component, OnInit } from '@angular/core';
import { RestapiservicesService } from './../restapiservices.service';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})


export class RestapiComponent implements OnInit {
  users: any;

  constructor(private api: RestapiservicesService) { }

  ngOnInit() {
    this.api.get('/1').subscribe(res => {
      this.users = res;
      console.log('data response', this.users);
    });
  }
  
}