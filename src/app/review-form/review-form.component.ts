import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, RouterModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent {
  reviewForm: FormGroup;
  isSubmitting = false;
  submitted = false;
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  constructor(private fb: FormBuilder, private supabase: SupabaseService) {
    this.reviewForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required], // Mapped to 'position' in DB
      company: ['', Validators.required],
      review: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]],
      rating: [5] // Default rating
    });
  }

  // Handle file selection
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        alert('File size too large. Please select an image under 2MB.');
        return;
      }
      this.selectedFile = file;

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Remove selected image
  removeImage() {
    this.selectedFile = null;
    this.previewUrl = null;
  }

  async onSubmit() {
    if (this.reviewForm.valid) {
      this.isSubmitting = true;

      try {
        const formData = this.reviewForm.value;
        let avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=random`; // Default

        // Use custom avatar if uploaded
        if (this.selectedFile) {
            try {
                avatarUrl = await this.supabase.uploadAvatar(this.selectedFile);
            } catch (err: any) {
                console.error("Avatar upload failed:", err);
                alert(`Image upload failed: ${err.message || err}. SUBMITTING WITH DEFAULT AVATAR.`);
                // We proceed even if upload fails, but now user knows
            }
        }

        const reviewData = {
          name: formData.name,
          position: formData.role,
          company: formData.company,
          review: formData.review,
          rating: formData.rating,
          avatar: avatarUrl,
          is_approved: false // New reviews need approval
        };

        await this.supabase.submitReview(reviewData);

        this.isSubmitting = false;
        this.submitted = true;
        this.reviewForm.reset();
        this.removeImage();

      } catch (error) {
        console.error('Error submitting review:', error);
        this.isSubmitting = false;
        alert('Failed to submit review. Please try again.');
      }
    } else {
      this.reviewForm.markAllAsTouched();
    }
  }
}

