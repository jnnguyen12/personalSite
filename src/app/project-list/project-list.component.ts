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
  maxWidth: number = 700;
  maxHeight: number = 500;

  projects: Project[] = PROJECTS;
  showImage: boolean = false;
  currentImage: string = "";
  mouseX: number = 0;
  mouseY: number = 0;
  imageLoaded: boolean = false;

  showingProject: Project | null = null;
  hoveringProject: Project | null = null;

  buttonList : {type: string, link: string}[] | null = [];

  selectProject(project: Project) {
    if (this.showingProject != project) {
      this.showingProject = project;
    }
  }

  recordMousePos(project: Project, event: MouseEvent) {
    if (project.imgSrc == '') {
      this.showImage = false;
      return;
    }

    if (project != this.hoveringProject && this.currentImage != project.imgSrc) {
      this.imageLoaded = false;
    }

    this.hoveringProject = project;
    this.currentImage = project.imgSrc;
    this.showImage = true;

    const img = document.querySelector('#hovering-image') as HTMLElement;
    if (img == null) return;

    if (img.clientHeight > img.clientWidth)
    {
      img.style.height = this.maxHeight + 'px';
      img.style.width = 'auto';
    }
    else {
      img.style.width = this.maxWidth + 'px';
      img.style.height = 'auto';
    }

    this.mouseX = event.clientX - img.clientWidth / 2;
    this.mouseY = event.clientY - img.clientHeight / 2;
  }

  onImageLoad() {
    this.imageLoaded = true;
    console.log("onImageLoad");
  }
}
