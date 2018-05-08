import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../shared/services/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerData: FormGroup;

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerData = this.registerFormBuild();
  }

  registerFormBuild(): FormGroup {
    return this.formBuilder.group( {
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });

  }

  signUp(){
    this.loginService.signup(this.registerData.getRawValue());
  }

}
