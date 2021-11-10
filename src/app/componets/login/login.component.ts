import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

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


  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.warn(this.loginForm.value);
  }
}
