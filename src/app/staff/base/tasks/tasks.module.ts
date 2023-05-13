import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChangeStatusComponent } from './components/change-status/change-status.component';
import { CommentTaskComponent } from './components/comment-task/comment-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';


@NgModule({
  declarations: [
    TasksComponent,
    ChangeStatusComponent,
    CommentTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule { }
