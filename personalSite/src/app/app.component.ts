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
    "C": "I got to learn C in my COMS327 class where we have to implement a Pokémon game, using NCurses and applicable data structures. I used C for the first part of the application, where most of the logic was developed.",
    "C++": "I got to learn C++ in my COMS327 class where we have to implement a Pokémon game, using NCurses and applicable data structures. I used C++ for the second half of the application, where a lot more front end components were tuned on.",
    "Java": "I have worked with Java for most of my projects in my Android Development class COMS309 - a spin off from Candy Land mobile game - and in COMS472 in an application on helping an AI play Tic Tac Toe basing on AIMA's github code. Aside from that, I used Java the most for Test Driven Development.",
    "JavaScript": "I have learned JavaScript in my COMS319 Web Development class. In this class, we developed a top-down hand-drawn bullet hell game, including a duck and onions for enemies.",
    "TypeScript": "I had the opportunity to learn Angular and TypeScript during a programming challenge for my current internship at RDI. After that, I used this knowledge to try to develop a weather app during Hackathon Spring 2023",
    "SQL": "I have experience with SQL on creating databases from datasheets in my Database Management class. In which, I used "
  }

  onSelect(lang:string):void {

  }
}
