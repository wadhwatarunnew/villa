import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsHighlightComponent } from '../../components/projects-highlight/projects-highlight.component';

@Component({
  selector: 'villa-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectsHighlightComponent],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {}
