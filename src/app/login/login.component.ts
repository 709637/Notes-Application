import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Injectable } from '@angular/core';

import { AuthenticationService } from 'services/authentication.service';
import {RouterService} from 'services/router.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnChanges,DoCheck {

  //designing model for form with fields username and password
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(public authentication: AuthenticationService, private routerService: RouterService) { }

  ngOnInit() {
    console.log("ngOnInit called================");
  }

  ngOnChanges(){
    console.log("ngOnChanges called================");
  }

  ngDoCheck(){
    console.log("ngDoCheck called================");
  }


  signIn() {
    let users = [];
    let user = this.loginForm.value;
    console.log("Signing in...");
    console.log(this.loginForm.value);
    let authKey = this.authentication.validateUser(this.loginForm.value).subscribe((data) => {
      users.push(data);
      let userflag = users[0].filter(usr => usr.username === user.username);
      let passflag = users[0].filter(usr => usr.password === user.password);
      if (userflag[0] === passflag[0]) {
        this.authentication.setToken(userflag[0].authKey);
        console.log("It came here");
        this.routerService.todashboard();
      }
    },
      (err) => {
        console.log(err);
      });
  }

  getusernameErrorMessage() {
    let uname = this.loginForm.get('username');
    return uname.hasError('required') ? 'User name must be filled' : '';
  }

  getpasswordErrorMessage() {
    let pwd = this.loginForm.get('password');
    return pwd.hasError('required') ? 'Password must be filled' : '';
  }

  getpasswordLengthErrorMessage() {
    let pwd = this.loginForm.get('password');
    return pwd.hasError('minlength') ? 'Password length must be atleast 6' : '';
  }

}
