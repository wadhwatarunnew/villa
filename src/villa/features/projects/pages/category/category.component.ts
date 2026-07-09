import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsHighlightComponent } from '../../components/projects-highlight/projects-highlight.component';

@Component({
  selector: 'villa-category-page',
  standalone: true,
  imports: [CommonModule, ProjectsHighlightComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class ProjectCategoryComponent {
  @Input() data!: any;
}
