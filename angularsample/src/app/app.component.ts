//import { Component } from '@angular/core';
import { Component, VERSION } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 // courses = [0];
  title = 'Angular 8';
  model: any = {};
  onSubmit() {
    alert('SUCCESS!! :-)\n\n');
  }
  titles = environment.title;
  apiURL = environment.apiURL;


  /*name = 'Angular ' + VERSION.major;
  user: any;

  constructor(private http: HttpClient) {
    // this.http.get('https://randomuser.me/api').subscribe((res: any) => {
    //   this.user = res.results[0];
    //   console.log(this.user);
    // })
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((res: any) => {
      console.log(res);
      this.user = res;
      console.log(this.user);
    })
  }*/
  
}

/*export class AppComponent {
  title = 'Meena';// <p> Display the Text</p>
{{title}}  <!---1Display the text--><BR>  step1
  //<p> Display the Input Type Text Result</p>

<input type="text" name="" [(ngModel)]="title"> <!---2Display the text ng model--><BR>
  import { FormsModule } from '@angular/forms'; //import FormsModule here
    FormsModule  //Assign FormsModule
     step2
}*/

/*export class AppComponent implements OnInit {
  title = 'Meena';
  ngOnInit() {
  }
  onClickSubmit(result:any) {
     console.log("You have entered : " + result.username); 
  }
  <p> Diplay the Form Submit after Alert</p>
<form #userName="ngForm" (ngSubmit)="onClickSubmit(userName.value)"> 
    <input type="text" name="username" placeholder="username" ngModel> 
    <br/> 
    <br/> 
    <input type="submit" value="submit"> 
 </form>  <!---3Display the alert using form submit--><BR>
 import { FormsModule } from '@angular/forms'; //import FormsModule here
    FormsModule  //Assign FormsModule
    import { Component, OnInit  } from '@angular/core';
}*/


/*export class AppComponent {
  
  RegisterStudent(studentForm: NgForm): void {   
    console.log(studentForm.value);
  }     <br/> https://dotnettutorials.net/lesson/dropdownlist-angular-template-driven-forms/
  <div class="container">
    <div class="row">
        <div class="form-bg">
            <form #studentForm="ngForm" (ngSubmit)="RegisterStudent(studentForm)"  >
              <div class="panel panel-primary">
                <div class="panel-heading">
                  <h3 class="panel-title">Student Registration</h3>
                </div>
                <div class="panel-body">
                  <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input id="firstName" type="text" class="form-control"
                          name="firstName" ngModel>
                  </div>
                  <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input id="lastName" type="text" class="form-control"
                          name="lastName" ngModel>
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="text" class="form-control"
                          name="email" ngModel>
                  </div>
                  <div class="form-group">
                    <label>Gender</label>
                    <div class="form-control">
                      <label class="radio-inline">
                        <input type="radio" name="gender" value="male" ngModel>
                        Male
                      </label>
                      <label class="radio-inline">
                        <input type="radio" name="gender" value="female" ngModel>
                        Female
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="branch">Branch</label>
                    <select id="branch" name="branch" ngModel class="form-control">
                      <option value="1">CSE</option>
                      <option value="2">ETC</option>
                      <option value="3">Mechanical</option>
                      <option value="4">Electrical</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <div class="form-control">
                      <label class="checkbox-inline">
                        <input type="checkbox" name="isAccept" ngModel>Accept Terms & Conditions
                      </label>
                    </div>
                  </div>
                </div>
                <div class="panel-footer">
                  <button class="btn btn-primary" type="submit">Submit</button>
                </div>
              </div>
            </form>
        </div>
    </div>
  </div>
}*/
