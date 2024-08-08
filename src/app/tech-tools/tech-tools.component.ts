import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ToolsComponent } from "../cards/tools/tools.component";

@Component({
  selector: 'app-tech-tools',
  standalone: true,
  imports: [HeaderComponent, ToolsComponent],
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css'
})
export class TechToolsComponent {

}
