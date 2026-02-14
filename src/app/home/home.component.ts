import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
    imports: [CommonModule, MatSlideToggleModule, ProfileComponent, MapsComponent, TechsComponent, DarkmodeComponent, SocialComponent, ContactMeComponent, HowItStartedComponent, GithubComponent, Project1Component, Project2Component],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  profile: string | undefined;
  maps: string | undefined;
  spotify: string | undefined;
  techs: string | undefined;
  project1: string | undefined;

  ngOnInit(): void {
    this.updateGridCols(window.innerWidth);
  }

  @HostListener('window:resize')
  onResize() {
    this.updateGridCols(window.innerWidth);
  }

  updateGridCols(windowWidth: number) {
    this.profile = windowWidth >= 1024 ? 'col-span-2 col-span-1' :
      windowWidth >= 768 ? 'col-span-1' :
        'col-span-2';

    this.maps = windowWidth >= 1024 ? 'col-span-1' :
      windowWidth >= 768 ? 'col-span-1' :
        'col-span-2';

    this.spotify = windowWidth >= 1024 ? 'col-span-1' :
      windowWidth >= 768 ? 'col-span-1' :
        'col-span-2';

    this.techs = windowWidth >= 1024 ? 'row-span-2 col-span-1' :
      windowWidth >= 768 ? 'col-span-1 row-span-2' :
        'col-span-2 row-span-2';


    this.project1 = windowWidth >= 1024 ? 'row-span-2' :
      windowWidth >= 768 ? 'col-span-1 row-span-2' :
        'col-span-2 row-span-2';

  }

}
