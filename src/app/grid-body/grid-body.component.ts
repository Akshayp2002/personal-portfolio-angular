import { TechsComponent } from './../cards/techs/techs.component';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProfileComponent } from "../cards/profile/profile.component";
import { MapsComponent } from "../cards/maps/maps.component";
import { ProjectsComponent } from "../cards/projects/projects.component";
import { SpotifyComponent } from "../cards/spotify/spotify.component";
import { SocialComponent } from "../cards/social/social.component";
import { ContactMeComponent } from "../cards/contact-me/contact-me.component";
import { HowItStartedComponent } from "../cards/how-it-started/how-it-started.component";
import { GithubComponent } from "../cards/github/github.component";
import { Project1Component } from "../cards/project-1/project-1.component";
import { Project2Component } from "../cards/project-2/project-2.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-body',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, ProfileComponent, MapsComponent, TechsComponent,ProjectsComponent, SpotifyComponent, SocialComponent, ContactMeComponent, HowItStartedComponent, GithubComponent, Project1Component, Project2Component],
  templateUrl: './grid-body.component.html',
  styleUrl: './grid-body.component.css'
})
export class GridBodyComponent implements OnInit {
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
