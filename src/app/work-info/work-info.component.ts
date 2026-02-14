import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { GalleryComponent } from "../gallery/gallery.component";

@Component({
    selector: 'app-work-info',
  standalone: true,
  imports: [MatDialogModule],
    templateUrl: './work-info.component.html',
    styleUrl: './work-info.component.css'
})
export class WorkInfoComponent {
  details: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<WorkInfoComponent>,
    private dialog: MatDialog
  ) {
    this.details = data;  // ✅ company object comes here
  }

  onClose(): void {
    this.dialogRef.close();
  }

  openGallery(images: any[]): void {
    this.dialog.open(GalleryComponent, {
      width: 'auto',      // let it size based on content
      height: 'auto',     // let it size based on content
      maxWidth: '95vw',   // responsive limit
      maxHeight: '95vh',  // prevent overflow
      data: images,
      panelClass: 'custom-gallery-dialog',
      hasBackdrop: true,
    });
  }

}
