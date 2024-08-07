import { DarkModeService } from './../../services/dark-mode.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-spotify',
  standalone: true,
  imports: [],
  templateUrl: './spotify.component.html',
  styleUrl: './spotify.component.css'
})
export class SpotifyComponent {

  darkModeService:DarkModeService = inject(DarkModeService);

  toggleDarkMode(){
    this.darkModeService.updateDarkMode();
  }
}
