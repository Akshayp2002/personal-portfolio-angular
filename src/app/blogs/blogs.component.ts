import { timer, Observable } from 'rxjs';
import { ContentfulService } from './../services/contentful.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  loading: boolean = true; // Added loading state

  constructor(private contentfulService: ContentfulService) { }

  blogPost$: Observable<any> | undefined;
  ngOnInit(): void {
    this.blogPost$ = this.contentfulService.getAllEntires();

    this.blogPost$.subscribe({

      next: () => {
        timer(1000).subscribe(() => (this.loading = false));
      },
      error: () => {
        timer(1000).subscribe(() => (this.loading = false));
      },
    });
  }

}
