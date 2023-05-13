import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { materials } from './angular-material/material-modules';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ...materials
    ],
    exports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      ...materials
  ],
    providers: [
        { provide: MatDialogRef, useValue: {} },
    ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule
    };
  }
}