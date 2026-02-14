import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfettiService } from '../services/confetti.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-header',
  standalone: true,
    imports: [RouterModule, NgClass],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public confettiService: ConfettiService) { }
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
