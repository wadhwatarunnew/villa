import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonCtaComponent } from '../../../../shared/components/common-cta/common-cta.component';
// import { matchesProjectRoute, projectCategories, projectGallery, projectRouteSlug } from '../../project-collections.data';
import { ProjectDetailHeroComponent } from '../../components/project-detail-hero/project-detail-hero.component';
import { ProjectChallengeSolutionComponent } from '../../components/project-challenge-solution/project-challenge-solution.component';

@Component({ selector: 'villa-project-detail-page', standalone: true, imports: [CommonModule, RouterModule, CommonCtaComponent, ProjectDetailHeroComponent, ProjectChallengeSolutionComponent], templateUrl: './project-detail-page.component.html' })
export class ProjectDetailPageComponent implements OnInit, OnDestroy {
  @Input() data: any;
  gallery: string[] = [];
  activeIndex = 0; 
  isFullscreen = false;

  ProjectInfo: any;
  Challenges: any;
  Solutions: any;
  ProjectDetails: any;
  GalleryInfo: any;
  OtherProjects: any;

  private intervalId?: ReturnType<typeof setInterval>;
  constructor(route: ActivatedRoute, router: Router) {
  }

  ngOnInit(): void { 
    this.intervalId = setInterval(() => this.next(), 9000); 
    this.ProjectDetails = this?.data?.Data?.Data;
    this.ProjectInfo = this?.data?.Data?.ProjectDetails?.ProjectInfo;
    this.Challenges = this?.data?.Data?.ProjectDetails?.Challenges;
    this.Solutions = this?.data?.Data?.ProjectDetails?.Solutions;
    this.GalleryInfo = this?.data?.Data?.GalleryInfo;
    this.gallery = this.GalleryInfo.content;
    this.OtherProjects = this?.data?.Data?.OtherProjects;
  }

  ngOnDestroy(): void { if (this.intervalId) clearInterval(this.intervalId); }

  select(index: number): void { this.activeIndex = index; }

  next(): void { this.activeIndex = (this.activeIndex + 1) % this.gallery.length; }

  previous(): void { this.activeIndex = (this.activeIndex - 1 + this.gallery.length) % this.gallery.length; }

  // get related(): string[] { return this.category.projects.filter(project => project !== this.project); }

  scroll(container: HTMLElement, direction: number): void { container.scrollBy({ left: direction * 340, behavior: 'smooth' }); }

  // routeSlug(project: string): string { return projectRouteSlug(project); }
}
