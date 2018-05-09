import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../shared/services/login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService) {

  }

  loginFormBuild(): FormGroup {
    return this.formBuilder.group( {
      email: ['aa@aa.aa', [Validators.email, Validators.required]],
      password: ['aaaaaa', Validators.required]
    });

  }

  ngOnInit(): void {
    this.loginData = this.loginFormBuild();
  }

  login() {
    this.loginService.login(this.loginData.getRawValue());
  }



}
