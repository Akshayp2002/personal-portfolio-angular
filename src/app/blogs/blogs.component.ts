import { Observable } from 'rxjs';
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


  constructor(private contentfulService: ContentfulService){ }

  blogPost$ : Observable<any> | undefined;
  ngOnInit(): void {
    this.blogPost$ =  this.contentfulService.getAllEntires();
    
  }
}
