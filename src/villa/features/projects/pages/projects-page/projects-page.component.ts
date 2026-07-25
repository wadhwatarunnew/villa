import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsHighlightComponent } from '../../components/projects-highlight/projects-highlight.component';
import { RouterModule } from '@angular/router';
import { projectCategories } from '../../project-collections.data';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';

@Component({
  selector: 'villa-projects-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectsHighlightComponent, CommonCtaComponent],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent { readonly categories = projectCategories; }
