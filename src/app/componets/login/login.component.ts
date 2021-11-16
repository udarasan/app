import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {LoginService} from "../../services/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email,Validators.required]),
    password: new FormControl('',[Validators.minLength(8),Validators.required] ),
  });

  //readonly Base_URl="https://iphen-stock-manager-api.herokuapp.com/api/v1/user/login?userEmail=admin@gmail.com&userPassword=admin4321";
  //baseURL: string = "https://iphen-stock-manager-api.herokuapp.com/api/v1/";
  //posts:any;


  constructor( private _loginService : LoginService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    var email=(this.loginForm.value.email);
    var password=(this.loginForm.value.password);
    //this.posts=this.getRepos(email,password).subscribe(response=>console.log(response))
    var response=this._loginService.loginRequest(email,password).subscribe(response=>console.log(response))
    console.log(response)
  }



}
