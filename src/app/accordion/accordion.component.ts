import { Component } from '@angular/core';
import { PROJECTS } from '../projects';
import { Project } from '../interfaces/project';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  projects: Project[] = PROJECTS;

}
