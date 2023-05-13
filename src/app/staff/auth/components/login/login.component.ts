import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.required],
    });
  }

  login(){
    this.router.navigateByUrl("/app")
  }

}
