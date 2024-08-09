import { Component, HostListener } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faBehance, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWrench, faChevronRight, faEnvelope, faDownload, faHouse, faUser, faTerminal, faPalette, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { Project } from './interfaces/interfaces';
import * as _projects from '../assets/jsons/projects.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faDownload = faDownload;
  title = 'personalSite';
  navbar: HTMLElement | null = null;
  navbarHeight = 0;
  lastScrollTop = 0;

  currentLang?: string;
  currentDescription?: string;

  navlinks: {section: string, name: string}[] = [
    {section: 'about', name: 'about me'},
    {section: 'work', name: 'work experiences'},
    {section: 'artworks', name: 'art projects'},
    {section: 'programming', name: 'programming projects'},
    {section: 'contact', name: 'contact me!'},
  ] 

  desc:{[key:string]: string} = {
    "C": "I got to learn C in my COMS327 class where we have to implement a Pokémon game, using NCurses and applicable data structures. I used C for the first part of the application, where most of the logic was developed.",
    "C++": "I got to learn C++ in my COMS327 class where we have to implement a Pokémon game, using NCurses and applicable data structures. I used C++ for the second half of the application, where a lot more front end components were tuned on.",
    "Java": "I have worked with Java for most of my projects in my Android Development class COMS309 - a spin off from Candy Land mobile game - and in COMS472 in an application on helping an AI play Tic Tac Toe basing on AIMA's github code. Aside from that, I used Java the most for Test Driven Development.",
    "JavaScript": "I have learned JavaScript in my COMS319 Web Development class. In this class, we developed a top-down hand-drawn bullet hell game, including a duck and onions for enemies.",
    "TypeScript": "I had the opportunity to learn Angular and TypeScript during a programming challenge for my current internship at RDI. After that, I used this knowledge to try to develop a weather app during Hackathon Spring 2023",
    "SQL": "I have experience with SQL on creating databases from datasheets in my Database Management class. In which, I used MySQL Workbench and Neo4j.",
    "C#": "I got an opportunity to work with C# and Razor during my internship at RDI, as a functioning language for Umbraco CMS, in both back-end and front-end functions, along with test code.",
    "HTML5": "I have had more experience in front-end web development since my COMS319 class, and had used it for a lot of applications since then, including Quackpocalypse (using pure JS), the Weather App (Angular and TS), and websites using Umbraco CMS at my RDI internship.",
    "SCSS": "I had learned CSS from COMS319 and in the Weather App along with the websites at my RDI internship. I started learning Sass then for Bootstrap and this website! :)",
    "Razor": "I got to work with Razor as a backend language for Umbraco CMS during my internship at RDI.",
  }

  ngOnInit() {
    this.navbar = document.getElementById('nav');
  }

  onSelect(lang:string):void {
    this.currentLang = lang;
    this.currentDescription = this.desc[lang];
  }

  onDeselect():void {
    this.currentDescription = 'Hover over a tab to display information!';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const navBarStyle = this.navbar!.style!;

    if (!this.navbarHeight) 
      this.navbarHeight = this.navbar!.getBoundingClientRect().height;

    if (this.navbar) {
      if (scrollTop > this.lastScrollTop) {
        navBarStyle.top = `-${this.navbarHeight}px`;
        console.log(navBarStyle.top);
      } else {
        navBarStyle.top = '0';
      }
    }

    this.lastScrollTop = scrollTop;
  }


}
