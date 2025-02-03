import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  gridCols: string | undefined;

  celebrate() {
    const duration = 3000; // in milliseconds

    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });

    // Clear confetti after a certain duration
    setTimeout(() => confetti.reset(), duration);
  }

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
  
  getGreeting(): string {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }
  
}

