import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { GridBodyComponent } from '../grid-body/grid-body.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, GridBodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
