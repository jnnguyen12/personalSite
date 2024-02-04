import { Component } from '@angular/core';
import { Project } from '../interfaces/interfaces';
import { PROJECTS } from '../projects';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  // animations: [
  //   trigger('backgroundChange', [
  //     state('selected', style({
  //       width: '100%',
  //       height: '100%',
  //       zIndex: '1'
  //     })),
  //     transition('* => selected', [
  //       animate('0.5s')
  //     ])
  //   ]),

  //   trigger('textChange', [

  //   ] )
  // ]
})
export class ProjectListComponent {
  projects: Project[] = PROJECTS;

  showingProject: Project | null = null;
  buttonList : {type: string, link: string}[] | null = [];

  selectProject(project: Project) {
    if (this.showingProject != project) {
      this.showingProject = project;
    }
  }

}
