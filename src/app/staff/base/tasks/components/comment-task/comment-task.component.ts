import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-task',
  templateUrl: './comment-task.component.html',
  styleUrls: ['./comment-task.component.scss']
})
export class CommentTaskComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<CommentTaskComponent>,) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.dialogRef.close()
  }

}
