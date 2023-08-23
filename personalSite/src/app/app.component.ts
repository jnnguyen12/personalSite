import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personalSite';

  langs:string[] = [
    'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C#', "HTML5", "Razor", 'SCSS', 'Prolog'
  ];

  frameworks:string[] = [
    'Volley', 'MySQL', 'Bootstrap', 'Angular', 'Pandas', 'Seaborn', 'Tensorflow'
  ];

  tools:string[] = [
    'Figma', 'Umbraco CMS', 'Postman', 'Intuiface', 'Adobe Photoshop', 'Adobe Illustrator', 'Agile', 'Git', 'Azure DevsOps'
  ];

  desc:{[key:string]: string} = {
    C: "Both C and C++ I have worked with during my COMS327 class where we have to implement a Pokémon game, using NCurses and applicable data structures.",
    "C++": "Both C and C++ I have worked with during my COMS327 class where we have to implement a Pokémon game, using NCurses and applicable data structures.",
    "Java": "I have worked with Java for most of my projects in" +  ("COMS309 - Sweet Valley").bold()
  }
}
