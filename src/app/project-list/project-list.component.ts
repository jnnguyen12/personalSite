import { Component } from '@angular/core';
import { Project } from '../interfaces/project';
import { PROJECTS } from '../projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  projects: Project[] = PROJECTS;

  showingProject: Project | null = null;

  selectProject(project: Project) {
    this.showingProject = project;
  }



}
