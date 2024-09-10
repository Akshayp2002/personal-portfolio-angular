import { CommonModule } from '@angular/common';
import { DarkModeService } from './services/dark-mode.service';
import { Component, Renderer2, ElementRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject as vercel } from "@vercel/analytics"
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.7)' }),  // Changed 'scale' to 'transform' for smoothness
        animate(
          '1000ms cubic-bezier(0.25, 0.8, 0.25, 1)',  // Smooth cubic-bezier easing
          style({ opacity: 1, transform: 'scale(1)' })
        )
      ])
    ])
  ]

})

export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit(): void {
    initFlowbite();
    injectSpeedInsights();
    vercel()

    this.renderer.setStyle(this.el.nativeElement, 'user-select', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-webkit-user-select', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-moz-user-select', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-ms-user-select', 'none');

  }
  darkModeService: DarkModeService = inject(DarkModeService);
}
