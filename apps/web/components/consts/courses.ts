export const courses = [{ title: "UX Design & MVP", id: "design" },
{ title: "Financial Documentation & Accounting", id: "accounting" },
{ title: "Web Development & Online Presence", id: "web" },
{ title: "Operational Management", id: "processes" },
{ title: "Data & Decisions", id: "data" }, { title: "Public Relationship", id: "public" }]

export const lessons: ILessons = {
    design: ["Characteristics of a good design",
        "Customer validation", "Sales validation",
        "Categories of users. Assistive technologies",
        "UX Desing process. Persona.",
        "Building wireframe and prototype.",
        "Tesing early concept.", "Responsive design in Adobe XD"]
}

export interface ILessons{
    design: string[],
    accounting?: string[],
    web?: string[],
    processes?: string[],
    public?: string[] 
}

export interface ILesson{
    title: string;
    content: IContent[]
}

export interface IContent{
   type: "plain" | "question" | "match" | "sort" | "label" | "type";
   image: string; 
   text: string[];
}