import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { GridBodyComponent } from "../grid-body/grid-body.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, GridBodyComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
