import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-work-info',
  standalone: true,
  imports: [],
  templateUrl: './work-info.component.html',
  styleUrl: './work-info.component.css'
})
export class WorkInfoComponent {
  details: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public companyId: number,  // Receive companyId as data
    private dialogRef: MatDialogRef<WorkInfoComponent>   // Inject MatDialogRef to close the dialog
  ) {
    // Find the company based on the passed companyId
    this.details = companyId;
  }

  onClose(): void {

    this.dialogRef.close(); // Closes the dialog
  }
}
