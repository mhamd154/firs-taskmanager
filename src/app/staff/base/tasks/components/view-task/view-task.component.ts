import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ViewTaskComponent>,@Inject(MAT_DIALOG_DATA) public taskDetails: any,) { }

  ngOnInit(): void {
    console.log(this.taskDetails, 'the task');
    
  }

  closeModal(){
    this.dialogRef.close()
  }

}
