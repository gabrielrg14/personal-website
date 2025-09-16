import { IPageSeo } from "interfaces"

export const pageSeo: IPageSeo = {
    title: "Experiences",
    description:
        "All the work experiences I had during my career as a developer.",
    additionalMetaTags: [
        {
            name: "keywords",
            content: [
                "Experience",
                "Experiences",
                "Work Experiences",
                "Job Experiences",
                "Technology Jobs",
                "Front-end Software Engineer",
                "Front-end Software Developer",
                "Web Development Intern"
            ].join(", ")
        }
    ],
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/experiences`
}
