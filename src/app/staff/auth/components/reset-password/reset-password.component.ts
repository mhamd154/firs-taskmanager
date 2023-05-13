import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/resources/utilities/password-match';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  hide = true;
  hide2 = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
    this.resetForm = this.fb.group({
      'password': ['', Validators.required],
      'confirmpassword': ['', Validators.required]
    },
    {
      validator: MustMatch("password", "confirmpassword"),
    } as AbstractControlOptions
    )
  }

  resetPassword(){
    
  }

}
