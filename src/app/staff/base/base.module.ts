import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotificationsComponent } from './notifications/notifications.component';


@NgModule({
  declarations: [
    SidenavComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule
  ]
})
export class BaseModule { }
