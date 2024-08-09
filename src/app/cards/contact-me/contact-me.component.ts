import { Component } from '@angular/core';
import { ConfettiService } from '../../services/confetti.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  constructor(public confettiService: ConfettiService) { }
}
