import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-it-started',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-it-started.component.html',
  styleUrl: './how-it-started.component.css'
})
export class HowItStartedComponent {

  headding: string = `How it started vs.
            how
            it's
            going`
  how: string = `A short personal history as it relates to design and
            development,and
            how I've found value in the
            cross-section between
            both disciplines.`
  date: string = "June 1 2024"
}
