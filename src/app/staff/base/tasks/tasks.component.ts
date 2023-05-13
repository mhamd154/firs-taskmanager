import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ChangeStatusComponent } from './components/change-status/change-status.component';
import { CommentTaskComponent } from './components/comment-task/comment-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "name",
    "startdate",
    "enddate",
    "priority",
    "status",
    "action"
  ];

  searchKey: string = '';  
  listData!: MatTableDataSource<any>;
  taskList: any[] = [
    { 
      id: 'TAS1234', 
      name: 'File count', 
      description: 'Count all files and take them to assets department',
      startdate: '11/05/2023',
      enddate: '13/04/2023',
      priority: 'Critical',
      status: 'Completed'
    },

    { 
      id: 'TAS4556', 
      name: 'Dispatch files', 
      description: 'Count all files and take them to assets department',
      startdate: '11/05/2023',
      enddate: '12/05/2023',
      priority: 'Medium',
      status: 'Pending'
    },

    { 
      id: 'TAS5434', 
      name: 'New printer installation', 
      description: 'Count all files and take them to assets department',
      startdate: '14/05/2023',
      enddate: '15/06/2023',
      priority: 'Low',
      status: 'In progress'
    }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listData = new MatTableDataSource(this.taskList);
  }

  changeStatus(){
    let dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '35%';
    dialogConfig.minHeight = '32vh';
    dialogConfig.disableClose = true;
    this.dialog
    .open(ChangeStatusComponent, dialogConfig)
    .afterClosed()
    .subscribe((res) => {
      
    });
  }

  commentTask(){
    let dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '35%';
    dialogConfig.minHeight = '32vh';
    dialogConfig.disableClose = true;
    this.dialog
    .open(CommentTaskComponent, dialogConfig)
    .afterClosed()
    .subscribe((res) => {
      
    });
  }

  viewTask(data: any){
    let dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '40%';
    dialogConfig.minHeight = '32vh';
    dialogConfig.disableClose = true;
    dialogConfig.data = data
    this.dialog
    .open(ViewTaskComponent, dialogConfig)
    .afterClosed()
    .subscribe((res) => {
      
    });
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase()
  }

  clearSearch(){
    this.searchKey = '';
    this.applyFilter();
  }

}
