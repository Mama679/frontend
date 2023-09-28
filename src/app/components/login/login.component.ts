import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public form ={
    user:null,
    password:null
  }

  constructor(){

  }

  onSubmit(){
    console.log(this.form);
  }

}
