import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UtilitiesService } from './resources/utilities/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    // Api services

    // Other services
    public utilities: UtilitiesService,
    private router: Router,
    public snackbar: MatSnackBar,
  ) { }

  exit(): void {
    localStorage.clear();
    // this.isLoggedin.next(false);
    this.router.navigateByUrl('/');
  }
}
