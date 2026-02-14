import { CommonModule } from '@angular/common';
import { DarkModeService } from './services/dark-mode.service';
import { Component, Renderer2, ElementRef, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject as vercel } from "@vercel/analytics"
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, CommonModule, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('reveal', [
            transition(':enter', [
                style({
                    opacity: 0,
                    filter: 'blur(10px)',
                    transform: 'translateX(-30px)'
                }),
                animate('1500ms cubic-bezier(0.5, 0, 0.5, 1)', style({
                    opacity: 1,
                    filter: 'blur(0)',
                    transform: 'translateX(0)'
                }))
            ])
        ]),
        trigger('routeFade', [
            transition('* <=> *', [
                query(':enter, :leave', style({
                    position: 'absolute',
                    width: '100%'
                }), { optional: true }),
                group([
                    query(':leave', [
                        style({ opacity: 1, transform: 'translateY(0) scale(1)' }),
                        animate('420ms ease-in', style({ opacity: 0, transform: 'translateY(-8px) scale(0.99)' }))
                    ], { optional: true }),
                    query(':enter', [
                        style({ opacity: 0, transform: 'translateY(10px) scale(0.99)' }),
                        animate('520ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
                    ], { optional: true })
                ])
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

    getRouteAnimationData(outlet: RouterOutlet): string {
        return outlet?.activatedRouteData?.['animation'] ?? 'route';
    }
}
