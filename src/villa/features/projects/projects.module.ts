import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPageComponent } from './pages';

@NgModule({
  imports: [ProjectsRoutingModule, ProjectsPageComponent]
})
export class ProjectsModule {}
