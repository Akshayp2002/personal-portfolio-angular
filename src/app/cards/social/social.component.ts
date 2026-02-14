import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
    selector: 'app-social',
  standalone: true,
    imports: [],
    templateUrl: './social.component.html',
    styleUrl: './social.component.css'
})
export class SocialComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
