import { WorkExperience } from "./interfaces/interfaces";

export const workExperiences: WorkExperience[] = [
    {
        company: "MobileDemand, LLC.",
        role: "Software Engineer",
        dateFrom: 'Mar 2024',
        dateTo: "Current",
        desc: `• Designed, developed and deployed 50% of a warehouse product information recording app, with real time BLE Scale weight-recording and ZXing barcode scanning using .NET MAUI (C# and XAML) on Android and iOS with an ASP.NET server.\n
               • Assisted with website and server updates on an Angular project with ASP.NET backend.\n
               • Successfully built and deployed the app to the Playstore and Appstore, utilizing REST API for data integration, created a headliner for revenue.`,
        skills: [".NET", ".NET Maui", "XML", "C#", "Figma", "Android", "iOS", "Angular", "TypeScript"],
        platforms: ["Android", "iOS", "Web"]
    },
    {
        company: "Thinix",
        role: "Software Development Intern",
        dateFrom: 'May 2023',
        dateTo: 'Dec 2023',
        desc: `• Lead Front-End Web Developer in a team of four using HTML, CSS, and Bootstrap in ASP.NET to re-design a multi-site of 7 company products, along with a hotel kiosk and Wi-Fi splash screen system with Umbraco CMS. \n
               • Took front-end developer role in a web application display for clients' network latency management probes in Angular and TypeScript, using Jest for writing tests. \n
               • Designed and assisted with all UX/UI decisions, across all company products and front-facing sites.`,
        skills: ["Umbraco CMS", "HTML", "Angular", "CSS", "Bootstrap", "ASP.NET"],
        platforms: ["Web"]
    },
    {
        company: "Iowa State University ETG",
        role: "Student Software Developer",
        dateFrom: 'Jan 2023',
        dateTo: 'May 2023',
        desc: `• Re-designed and reprogrammed a 7-year-old interactive user-experience project on a 7680x3240 touch-screen display for Iowa State's Engineering department using Intuiface, with academic and entertainment purposes. \n
               • Collaborated with adjacent departments and personnel for content propagation and interviews, and user accessibility kept in mind due to the size of the project`,
        skills: ["Intuiface", "Figma", "WordPress"],
        platforms: ["Windows"]
    },
    {
        company: "Whirlybird's at State Gym",
        role: "Supervisor",
        dateFrom: "Aug 2021",
        dateTo: "Feb 2023",
        desc: `• Supervised multiple teams of 3 to make protein drinks and handled customer correspondence under a high-pressure and fast-paced environment.\n
               • Took responsibility for ensuring well-stocked inventory and up-to-standard sanitization and food safety.`,
        skills: ["Customer service", "Leadership", "Employee training", "Supervising", "Food safety", "Making bomb smoothies"],
        platforms: []
    },
    {
        company: "Des Moines Area Community College Tech Support",
        role: "Tech Support Helpdesk Agent",
        dateFrom: "Oct 2019",
        dateTo: "Aug 2020",
        desc: `• Assisted in solving technical issues for DMACC's faculty and students, revolving account recovery and permissions, using Banner, Active Directory, and other networking applications via tickets and calls.\n
               • Participated in troubleshooting devices, on-site and remote, while practicing excellence in customer service.`,
        skills: ['Active Directory', "Customer service", "Tech support", "Account management"],
        platforms: ["Windows"]
    }
];