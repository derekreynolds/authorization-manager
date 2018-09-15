import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'er-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>) {}

  ngOnInit() {
  }

  onClickNo(): void {
    this.dialogRef.close({'answer': 'N'});
  }

  onClickYes(): void {
    this.dialogRef.close({'answer': 'Y'});
  }


}
