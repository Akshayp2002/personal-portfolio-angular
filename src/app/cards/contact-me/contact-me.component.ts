import { Component } from '@angular/core';
import { ConfettiService } from '../../services/confetti.service';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-contact-me',
  standalone: true,
    imports: [ClipboardModule, CommonModule, FormsModule],
    templateUrl: './contact-me.component.html',
    styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  constructor(public confettiService: ConfettiService) { }
  value = "sr.dev.akshay@gmail.com";
  
  showContactForm = false;
  isSubmitting = false;
  formData = {
    name: '',
    email: '',
    message: ''
  };

  openContactForm() {
    this.showContactForm = true;
  }

  closeContactForm() {
    this.showContactForm = false;
    this.resetForm();
  }

  resetForm() {
    this.formData = { name: '', email: '', message: '' };
  }

  async submitForm() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      alert('Please fill in all fields');
      return;
    }

    this.isSubmitting = true;
    try {
      const response = await fetch(environment.contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      });

      if (response.ok) {
        this.confettiService.celebrate();
         this.confettiService.fireworks();
         alert('Message sent successfully! 🎉');
        this.closeContactForm();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again.');
    } finally {
      this.isSubmitting = false;
    }
  }

}
