import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsHighlightComponent } from '../../components/blogs-highlight/blogs-highlight.component';

@Component({
  selector: 'villa-blogs-page',
  standalone: true,
  imports: [CommonModule, BlogsHighlightComponent],
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss']
})
export class BlogsPageComponent {}
