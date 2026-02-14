        this.isSubmitting = false;
        alert('Failed to submit review. Please try again.');
      }
    } else {
      this.reviewForm.markAllAsTouched();
    }
  }
}
