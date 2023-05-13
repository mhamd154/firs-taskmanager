import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },

  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },

  {
    path: 'reset-password', component: ResetPasswordComponent
  },

  {
    path: 'activation', component: SetPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
