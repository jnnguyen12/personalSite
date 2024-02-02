import { Project } from "./interfaces/project";

export const PROJECTS: Project[] = [
    {
       imgSrc: '../assets/img/splash.png',
       name: "Hotel Splash Screen",
       date: "Nov 2023",
       medium: "Umbraco CMS",
       place: 'RDI / Thinix',
       behance: 'https://www.behance.net/gallery/187135255/Inflight-Entertainment-Map',
       desc: "A system of hotel kiosk and WiFi splash screen made with Umbraco CMS, C#, and Bootstrap during my internship at RDI."
    },
    {
       imgSrc: '../assets/img/inflight.png',
       name: "Inflight Entertainment Map",
       date: "Fall 2023",
       medium: "React JS, Bootstrap",
       place: 'Senior Design Project',
       behance: 'https://www.behance.net/gallery/186292747/WiFi-Splash-Screen',
       github: 'https://github.com/jnnguyen12/Inflight-Entertainment-Map',
       desc: "My senior design group project of a resizable, movable and offline functional inflight map with flight information made using React, TypeScript and Python for backend. The map is a separate component and can be used on top of other cient's application. I was in charge with the front-end and 100% of its UX/UI."
    },
    {
       imgSrc: '../assets/img/thinix.png',
       name: "Thinix Company Website",
       date: "Summer 2023",
       medium: "Umbraco CMS",
       place: 'RDI / Thinix',
       other: 'thinix.com',
       desc: "This website among 7 sites belongs to the company that I worked for during Summer 2023. It was a redesign and update of the whole 7 multi-site using Umbraco CMS, in which I was head front-end and 90% of the UX/UI decision. I wrote macros and created the layout for all the components, using Razor, C# in cshtml. "
    },
    {
       imgSrc: '../assets/img/pokemon.png',
       name: "Pokemon COMS327 Project",
       date: "Fall 2022",
       medium: "C, C++, ASCII",
       place: 'COMS327 at ISU',
       github: 'https://github.com/jnnguyen12/COMS327pokemon',
       desc: "An ASCII art class project for a rendition of the classic pokemon franchise, in C and C++."
    },

]