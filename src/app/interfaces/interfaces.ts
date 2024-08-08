export interface Project {
    imgSrc: string,     
    name: string,
    date: string,
    medium: string,
    place?: string
    desc?: string,
    buttonList: {
        type: string,
        link: string
    }[]
}

export interface WorkExperience {
    company: string,
    role: string,
    dateFrom: string,
    dateTo: string,
    desc: string 
}

export interface Proficiency {
    name: string,
    items: string[]
}