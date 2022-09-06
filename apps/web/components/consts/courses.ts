export const courses = [{ title: "UX Design & MVP", id: "design" },
{ title: "Financial Documentation & Accounting", id: "accounting" },
{ title: "Web Development & Online Presence", id: "web" },
{ title: "Operational Management", id: "processes" },
{ title: "Data & Decisions", id: "data" }, { title: "Public Relationship", id: "public" }]

export const lessons: ILessons = {
    design: [
        {
            title: "Characteristics of a good design",
            content: [
                {
                    type: "plain", image: "/steve-harvey.png",
                    text: [
                        {
                            type: "center", text:
                                "Meet Steve. He is a UX Designer at Google."
                        }

                    ]
                },
                {
                    type: "plain", image: "/product-development.png",
                    text: [
                        {
                            type: "plain",
                            place: "top",
                            text: "He is tightly involved in designing new products. Each new product usually goes through the following design phases."
                        },
                        { type: "paragraph", text: "While creating new product he makes sure that the product he designs are:" },
                        { type: "list", text: ["Usable", "Equitable", "Enjoyable", "Useful"] }
                    ]
                },
                {
                    type: "plain", image: "/europe.jpg",
                    text: [
                        {
                            type: "center",
                            text: "He is leaving for vacation in a couple of weeks. This time he decided to visit Europe."
                        },
                    ]
                },
                {
                    type: "plain", image: "/matilda.webp",
                    text: [
                        {
                            type: "plain",
                            text: "But before leaving he has to find a sitter for his eldery cat Matilda."
                        },
                        {
                            type: "plain",
                            text: "From the past Steve knows that Matilda wont not tolerate a stay at a pet hotel offered by the vet clinic."
                        },
                        {
                            type: "plain",
                            text: "But what other options are out there?"
                        },
                    ]
                },
                {
                    type: "plain", image: "/google-search.webp",
                    text: [
                        {
                            type: "center",
                            text: 'Google must have the answer. He types in the search bar… "sitter for Matilda near me"'
                        },

                    ]
                },
                {
                    type: "plain", image: "/matilda1.jpg",
                    text: [
                        {
                            type: "plain",
                            text: 'Aha! Here is a website for cat sitters in the area. He exclaims! But Matilda looks skeptical…'
                        },

                    ]
                },
                {
                    type: "plain", image: "/pet-sitter.png",
                    text: [
                        {
                            type: "plain",
                            text: 'Steve taps on the button "find a sitter" on his phone, but nothing happens. He tries again  - same result. He was about to leave the website, but decided to click on a cat picture before doing so. Suddenly the pet sitters list opens. Well, that is not "usable" for sure. Matilda nodded her head.'
                        },

                    ]
                },
                {
                    type: "plain", image: "/sitters.png",
                    text: [
                        {
                            type: "plain",
                            text: `The battery on Steve's phone died and he switched to his desktop. His mouse broke just yesterday and the new one has not arrived yet. That's Ok, I'll use the keyboard to navigate the website. He explained to Matilda. She agreed.`
                        },

                    ]
                },
                {
                    type: "plain", image: "/sitters.png",
                    text: [
                        {
                            type: "plain",
                            text: `Steve tried to get to the cat picture to click on using the keys, but the picture was not included in the tab order. Hmm… What if the person using this website is blind and has to use assistive technology? This website is not equitable - it excludes people with disabilities altogether. 
                            `
                        },

                    ]
                },
                {
                    type: "plain", image: "/sad-cat.jpg",
                    text: [
                        {
                            type: "plain",
                            text: `Ok, Matilda. Let's go back to my phone - the battery seems to charge enough. Let's see what's there. You wanna see some nice sitters? Matilda looks curiously and turns her eyes away in a few seconds. Steve notices a graphic of a sad cat right on the top of the page. Well, that does not look fun. `
                        },

                    ]
                },             
                {
                    type: "plain", image: "/no-result-found.png",
                    text: [
                        {
                            type: "center",
                            text: `Steve enters his zip code and sees 0 results found. Not useful. He says.`
                        },

                    ]
                },
                {
                    type: "plain", image: "/esa-certificate.jpg",
                    text: [
                        {
                            type: "plain",
                            text: `Steve looks at Matilda. I know it sounds like a crazy idea, but maybe I can take you with me? Matilda purrs. Let's see what we can do. Quick search shows that ESA pets can travel with no restrictions and fees.`
                        },

                    ]
                },
                {
                    type: "plain", image: "/steps.png",
                    text: [
                        {
                            type: "plain",
                            text: `He founded a website that after a short 3-min questionnaire and a low fee provides a ESA certification delivered the next day. Wow! That was usable, useful, enjoyable and equatable! Thanks to Utopic ESA Certification Service!`
                        },

                    ]
                },
                {
                    type: "plain", image: "/vacation-cat.jpg",
                    text: [
                        {
                            type: "center",
                            text: `2 weeks later…. Matilda and Steve are enjoying their vacation in Europe!`
                        },

                    ]
                },
            ]
        },
        {
            title: "Customer validation",
            content: [
                {
                    type: "plain", image: "/steve-harvey.png",
                    text: [
                        {
                            type: "center", text:
                                "Meet Steve. He is a UX Designer at Google."
                        }

                    ]
                },
                {
                    type: "plain", image: "/product-development.png",
                    text: [
                        {
                            type: "plain",
                            place: "top",
                            text: "He is tightly involved in designing new products. Each new product usually goes through the following design phases."
                        },
                        { type: "paragraph", text: "While creating new product he makes sure that the product he designs are:" },
                        { type: "list", text: ["Usable", "Equitable", "Enjoyable", "Useful"] }
                    ]
                },
            ]
        },
        {
            title: "Sales validation",
            content: [
                {
                    type: "plain", image: "/steve-harvey.png",
                    text: [
                        {
                            type: "center", text:
                                "Meet Steve. He is a UX Designer at Google."
                        }

                    ]
                },
                {
                    type: "plain", image: "/product-development.png",
                    text: [
                        {
                            type: "plain",
                            place: "top",
                            text: "He is tightly involved in designing new products. Each new product usually goes through the following design phases."
                        },
                        { type: "paragraph", text: "While creating new product he makes sure that the product he designs are:" },
                        { type: "list", text: ["Usable", "Equitable", "Enjoyable", "Useful"] }
                    ]
                },
            ]
        },
        {
            title: "Categories of users. Assistive technologies",
            content: [
                {
                    type: "plain", image: "/steve-harvey.png",
                    text: [
                        {
                            type: "center", text:
                                "Meet Steve. He is a UX Designer at Google."
                        }

                    ]
                },
                {
                    type: "plain", image: "/product-development.png",
                    text: [
                        {
                            type: "plain",
                            place: "top",
                            text: "He is tightly involved in designing new products. Each new product usually goes through the following design phases."
                        },
                        { type: "paragraph", text: "While creating new product he makes sure that the product he designs are:" },
                        { type: "list", text: ["Usable", "Equitable", "Enjoyable", "Useful"] }
                    ]
                },
            ]
        },
    ]
    // "Customer validation", "Sales validation",
    // "Categories of users. Assistive technologies",
    // "UX Desing process. Persona.",
    // "Building wireframe and prototype.",
    // "Tesing early concept.", "Responsive design in Adobe XD"]
}

export interface ILessons {
    design: ILesson[],
    accounting?: ILesson[],
    web?: ILesson[],
    processes?: ILesson[],
    public?: ILesson[],
}

export interface ILesson {
    title: string;
    content: IContent[]
}

export interface IContent {
    type: "plain" | "question" | "match" | "sort" | "label" | "type" | null;
    image: string | null;
    text: { type: string, place?: string, text: string | string[] }[];
}