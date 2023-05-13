import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Constant } from 'src/app/resources/constants/constants';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  emailForm!: FormGroup;

  constructor(private fb: FormBuilder, private app: AppService) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
    this.emailForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
    });
  }

  sendMail(){
    this.app.snackbar.open('Kindly check your email for password reset link',  'Dismiss', {
      duration:Constant.TIMEOUT_DURATION
    });
  }

}
