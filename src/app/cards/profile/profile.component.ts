import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  gridCols: string | undefined;

  ngOnInit(): void {
    this.updateGridCols(window.innerWidth);
  }

  @HostListener('window:resize')
  onResize() {
    this.updateGridCols(window.innerWidth);
  }

  updateGridCols(windowWidth: number) {
    this.gridCols = windowWidth >= 1024 ? 'col-span-2' :
      windowWidth >= 640 ? 'col-span-2' :
        'col-span-1';
  }

  
}

