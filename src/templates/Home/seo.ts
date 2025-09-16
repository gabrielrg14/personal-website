import { IPageSeo } from "interfaces"

export const pageSeo: IPageSeo = {
    title: "Gabriel - Front-end Software Engineer",
    description:
        "Learn more about me on my Personal Website by downloading my CV or checking out my Skills, Experiences, and also the Projects I've developed and published on GitHub.",
    additionalMetaTags: [
        {
            name: "keywords",
            content: [
                "Gabriel",
                "Gabriel Rapucci",
                "Gabriel Gonzalez",
                "Gabriel Rapucci Gonzalez",
                "Campinas",
                "Campinas/SP",
                "Campinas/SP - Brazil",
                "Web",
                "Dev",
                "Web Dev",
                "Developer",
                "Web Developer",
                "Software",
                "Software Developer",
                "Front-end",
                "Dev Front-end",
                "Front-end Developer",
                "Front-end Software Developer",
                "Software Engineer",
                "Front-end Software Engineer",
                "React Developer",
                "Front-end React Developer",
                "Portfolio",
                "Personal Portfolio",
                "Curriculum Vitae",
                "Personal CV",
                "Resume",
                "Personal Resume",
                "Project",
                "Personal Project",
                "Website",
                "Personal Website"
            ].join(", ")
        }
    ],
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/`
}
