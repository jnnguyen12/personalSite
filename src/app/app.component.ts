import { Component, HostListener } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Project } from './interfaces/interfaces';
import * as _projects from '../assets/jsons/projects.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faDownload = faDownload;
  faGithub = faGithub;
  faBehance = faBehance;
  faLinkedin = faLinkedin;


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

  ngOnInit() {
    this.navbar = document.getElementById('nav');
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
      } else {
        navBarStyle.top = '0';
      }
    }

    this.lastScrollTop = scrollTop;
  }
}
