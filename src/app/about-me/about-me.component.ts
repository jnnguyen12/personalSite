import { Component } from '@angular/core';
import { faLinkedinIn, faBehance, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  faArrow = faArrowRight;
  faGithub = faGithub;
  faBehance = faBehance;
  faLinkedin = faLinkedinIn;
  faCaret = faCaretDown;

  langs: string[] = [
    'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C#', "HTML5", 'SCSS', "Razor"
  ];

  frameworks: string[] = [
    '.NET', '.ASP.NET', 'Bootstrap', 'Angular', 'Volley', 'Jest', 'MySQL', 'THREE.js', 'React.js', "Node.js"
  ];

  tools:string[] = [
    'Figma', 'Umbraco CMS', 'Postman', 'Intuiface', 'Adobe Photoshop', 'Adobe Illustrator', 'Agile', 'Git', 'Azure DevOps', 'VSCode', 'Visual Studio'
  ];

}
