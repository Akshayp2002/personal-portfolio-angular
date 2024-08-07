import { CommonModule } from '@angular/common';
import { DarkModeService } from './services/dark-mode.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
  darkModeService:DarkModeService  = inject(DarkModeService);
}
