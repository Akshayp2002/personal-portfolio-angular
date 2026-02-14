import { timer, Observable, map } from 'rxjs';
import { ContentfulService } from './../services/contentful.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogTag {
  name?: string;
  color?: string;
}

interface BlogPostFields {
  poster?: { fields?: { file?: { url?: string } } };
  headding?: string;
  quickLook?: string;
  tags?: BlogTag[];
  link?: string | false;
}

interface BlogPostEntry {
  fields?: BlogPostFields;
  sys?: { createdAt?: string };
}

@Component({
    selector: 'app-blogs',
  standalone: true,
    imports: [CommonModule],
    templateUrl: './blogs.component.html',
    styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  loading: boolean = true;
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalItems: number = 0;

  blogPostItems$: Observable<BlogPostEntry[]> | undefined;
  displayedItems: BlogPostEntry[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    const skip = (this.currentPage - 1) * this.itemsPerPage;
    this.blogPostItems$ = this.contentfulService.getAllEntires(this.itemsPerPage, skip).pipe(
      map((response: any) => {
        this.totalItems = response?.total ?? 0;
        return (response?.items ?? []) as BlogPostEntry[];
      })
    );

    this.blogPostItems$.subscribe({
      next: (items) => {
        this.displayedItems = items;
        timer(400).subscribe(() => (this.loading = false));
      },
      error: () => {
        timer(400).subscribe(() => (this.loading = false));
      },
    });
  }

  nextPage(): void {
    if (this.hasNextPage()) {
      this.loading = true;
      this.currentPage++;
      this.loadBlogs();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  prevPage(): void {
    if (this.hasPrevPage()) {
      this.loading = true;
      this.currentPage--;
      this.loadBlogs();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  hasNextPage(): boolean {
    return this.currentPage * this.itemsPerPage < this.totalItems;
  }

  hasPrevPage(): boolean {
    return this.currentPage > 1;
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
}
