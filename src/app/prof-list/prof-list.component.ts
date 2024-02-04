import { Component } from '@angular/core';
import { faCircleChevronLeft, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { Proficiency } from '../interfaces/interfaces';

@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.component.html',
  styleUrls: ['./prof-list.component.scss']
})



export class ProfListComponent {
  faCircleChevronLeft = faCircleChevronLeft;
  faCircleDot = faCircleDot;

  selectedCategory: Proficiency | null = null;

  langs: string[] = [
    'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C#', "HTML5", 'SCSS', "Razor"
  ];

  frameworks: string[] = [
    '.NET Core', 'Bootstrap', 'Angular', 'Volley', 'Jest', 'MySQL', 'THREE.js', 'React.js', "Node.js"
  ];

  tools:string[] = [
    'Figma', 'Umbraco CMS', 'Postman', 'Intuiface', 'Adobe Photoshop', 'Adobe Illustrator', 'Agile', 'Git', 'Azure DevOps', 'VSCode', 'Visual Studio'
  ];

  categories: Proficiency[] = [
    {name: 'Programming languages', items: this.langs},
    {name: 'Frameworks and tools', items: this.frameworks},
    {name: 'Applications and CMS', items: this.tools}
  ]

  selectCategory(category: Proficiency) {
    if (this.selectedCategory != category) {
      this.selectedCategory = category;
    }
  }
}
