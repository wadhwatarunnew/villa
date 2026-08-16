import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';
import { matchesProjectRoute, projectCategories, projectGallery, projectRouteSlug } from '../../project-collections.data';
import { ProjectDetailHeroComponent } from '../../components/project-detail-hero/project-detail-hero.component';
import { ProjectChallengeSolutionComponent } from '../../components/project-challenge-solution/project-challenge-solution.component';

@Component({ selector: 'villa-project-detail-page', standalone: true, imports: [CommonModule, RouterModule, CommonCtaComponent, ProjectDetailHeroComponent, ProjectChallengeSolutionComponent], templateUrl: './project-detail-page.component.html' })
export class ProjectDetailPageComponent implements OnInit, OnDestroy {
  category = projectCategories[0]; project = this.category.projects[0]; gallery: string[] = []; activeIndex = 0; isFullscreen = false;
  private intervalId?: ReturnType<typeof setInterval>;
  constructor(route: ActivatedRoute, router: Router) { route.paramMap.subscribe(params => { this.category = projectCategories.find(item => item.slug === params.get('category')) ?? projectCategories[0]; const projectParam = params.get('project') ?? ''; this.project = this.category.projects.find(item => matchesProjectRoute(item, projectParam)) ?? this.category.projects[0]; this.gallery = projectGallery(this.category.slug, this.project); this.activeIndex = 0; const canonicalProject = projectRouteSlug(this.project); if (projectParam !== canonicalProject) router.navigate(['/projects', this.category.slug, canonicalProject], { replaceUrl: true }); }); }
  ngOnInit(): void { this.intervalId = setInterval(() => this.next(), 9000); }
  ngOnDestroy(): void { if (this.intervalId) clearInterval(this.intervalId); }
  select(index: number): void { this.activeIndex = index; }
  next(): void { this.activeIndex = (this.activeIndex + 1) % this.gallery.length; }
  previous(): void { this.activeIndex = (this.activeIndex - 1 + this.gallery.length) % this.gallery.length; }
  get related(): string[] { return this.category.projects.filter(project => project !== this.project); }
  scroll(container: HTMLElement, direction: number): void { container.scrollBy({ left: direction * 340, behavior: 'smooth' }); }
  routeSlug(project: string): string { return projectRouteSlug(project); }
}
