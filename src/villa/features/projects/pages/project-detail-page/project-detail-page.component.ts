import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';
import { projectCategories, projectGallery } from '../../project-collections.data';
import { ProjectCaseStudyComponent } from '../../components/project-case-study/project-case-study.component';

@Component({ selector: 'villa-project-detail-page', standalone: true, imports: [CommonModule, RouterModule, CommonCtaComponent, ProjectCaseStudyComponent], templateUrl: './project-detail-page.component.html' })
export class ProjectDetailPageComponent implements OnInit, OnDestroy {
  category = projectCategories[0]; project = this.category.projects[0]; gallery: string[] = []; activeIndex = 0; isFullscreen = false;
  private intervalId?: ReturnType<typeof setInterval>;
  constructor(route: ActivatedRoute) { route.paramMap.subscribe(params => { this.category = projectCategories.find(item => item.slug === params.get('category')) ?? projectCategories[0]; this.project = this.category.projects.find(item => item === params.get('project')) ?? this.category.projects[0]; this.gallery = projectGallery(this.category.slug, this.project); this.activeIndex = 0; }); }
  ngOnInit(): void { this.intervalId = setInterval(() => this.next(), 9000); }
  ngOnDestroy(): void { if (this.intervalId) clearInterval(this.intervalId); }
  select(index: number): void { this.activeIndex = index; }
  next(): void { this.activeIndex = (this.activeIndex + 1) % this.gallery.length; }
  previous(): void { this.activeIndex = (this.activeIndex - 1 + this.gallery.length) % this.gallery.length; }
  get related(): string[] { return this.category.projects.filter(project => project !== this.project); }
  scroll(container: HTMLElement, direction: number): void { container.scrollBy({ left: direction * 340, behavior: 'smooth' }); }
}
