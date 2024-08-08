import { Component } from '@angular/core';
import { WorkExperience } from '../interfaces/interfaces';
import { workExperiences } from '../workExperiences';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent {
  experiences : WorkExperience[] = workExperiences;
  showingExperience: WorkExperience | null = null;
  descriptions: string [] = [];

  selectExperience(experience: WorkExperience) {
    this.showingExperience = (this.showingExperience != experience) ? experience : this.showingExperience;
    this.descriptions = experience.desc.split("\n");
  }
}
