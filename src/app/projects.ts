import { Project } from "./interfaces/interfaces";

export const PROJECTS: Project[] = [
    {
       imgSrc: '../assets/img/splash.png',
       name: "Hotel Splash Screen",
       date: "Nov 2023",
       medium: "Umbraco CMS",
       place: 'RDI / Thinix',
       desc: "A system of hotel kiosk and WiFi splash screen made with Umbraco CMS, C#, and Bootstrap during my internship at RDI.",
       buttonList: [
         {type: 'Behance', link: 'https://www.behance.net/gallery/186292747/WiFi-Splash-Screen'},
       ]
      },
      {
         imgSrc: '../assets/img/inflight.png',
         name: "Inflight Entertainment Map",
         date: "Fall 2023",
         medium: "React JS, Bootstrap",
         place: 'Senior Design Project',
         desc: "My senior design group project of a resizable, movable and offline functional inflight map with flight information made using React, TypeScript and Python for backend. The map is a separate component and can be used on top of other cient's application. I was in charge with the front-end and 100% of its UX/UI.",
         buttonList: [
            {type: 'Behance', link: 'https://www.behance.net/gallery/187135255/Inflight-Entertainment-Map'},
            {type: 'Github', link: 'https://github.com/jnnguyen12/Inflight-Entertainment-Map'}
       ]
    },
    {
       imgSrc: '../assets/img/thinix.png',
       name: "Thinix Company Website",
       date: "Summer 2023",
       medium: "Umbraco CMS",
       place: 'RDI / Thinix',
       desc: "This website among 7 sites belongs to the company that I worked for during Summer 2023. It was a redesign and update of the whole 7 multi-site using Umbraco CMS, in which I was head front-end and 90% of the UX/UI decision. I wrote macros and created the layout for all the components, using Razor, C# in cshtml. ",
       buttonList: [
         {type: 'Thinix Website', link: 'https://thinix.com'}
       ]
    },
    {
       imgSrc: '../assets/img/pokemon.png',
       name: "Pokemon COMS327 Project",
       date: "Fall 2022",
       medium: "C, C++, ASCII",
       place: 'COMS327 at ISU',
       desc: "An ASCII art class project for a rendition of the classic pokemon franchise, in C and C++.",
       buttonList: [
         {type: 'Github', link: 'https://github.com/jnnguyen12/COMS327pokemon'}
       ]
    },

]