import { DarkModeService } from '../../services/dark-mode.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  standalone: true,
  imports: [],
  templateUrl: './darkmode.component.html',
  styleUrl: './darkmode.component.css'
})
export class DarkmodeComponent {

  darkModeService: DarkModeService = inject(DarkModeService);

  toggleDarkMode() {
    console.log("working");
    
    this.darkModeService.updateDarkMode();
  }
}
