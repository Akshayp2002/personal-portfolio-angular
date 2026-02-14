import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { ProfileComponent } from '../cards/profile/profile.component';
import { Project2Component } from '../cards/project-2/project-2.component';
import { Project1Component } from '../cards/project-1/project-1.component';
import { GithubComponent } from '../cards/github/github.component';
import { HowItStartedComponent } from '../cards/how-it-started/how-it-started.component';
import { TechsComponent } from '../cards/techs/techs.component';
import { MapsComponent } from '../cards/maps/maps.component';
import { SocialComponent } from '../cards/social/social.component';
import { ContactMeComponent } from '../cards/contact-me/contact-me.component';
import { DarkmodeComponent } from '../cards/darkmode/darkmode.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProfileComponent, MapsComponent, TechsComponent, DarkmodeComponent, SocialComponent, ContactMeComponent, HowItStartedComponent, GithubComponent, Project1Component, Project2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent {
  // No complex logic needed! CSS handles the responsiveness now.
}
