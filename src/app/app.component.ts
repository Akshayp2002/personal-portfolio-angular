import { CommonModule } from '@angular/common';
import { DarkModeService } from './services/dark-mode.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from "./header/header.component";
import { ConfettiService } from './services/confetti.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  constructor(public confettiService: ConfettiService) { }
  ngOnInit(): void {
    initFlowbite();
  }
  darkModeService:DarkModeService  = inject(DarkModeService);
}
