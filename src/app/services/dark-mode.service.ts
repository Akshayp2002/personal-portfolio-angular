import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkModeSignel = signal<string>(
    JSON.parse(window.localStorage.getItem('darkModeSignel') ?? '"null"')
  );

  updateDarkMode() {
    const newMode = this.darkModeSignel() === 'dark' ? 'null' : 'dark';
    this.darkModeSignel.set(newMode);
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkModeSignel', JSON.stringify(this.darkModeSignel()));
      // Update the body class globally to reflect the mode change.
      if (this.darkModeSignel() === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }
}
