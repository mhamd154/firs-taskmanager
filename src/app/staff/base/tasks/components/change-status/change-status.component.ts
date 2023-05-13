import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss']
})
export class ChangeStatusComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ChangeStatusComponent>,) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.dialogRef.close()
  }

}
