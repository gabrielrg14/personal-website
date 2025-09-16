import { IPageSeo } from "interfaces"

export const pageSeo: IPageSeo = {
    title: "Projects",
    description:
        "The main projects I developed and published on my GitHub throughout my studies as a developer.",
    additionalMetaTags: [
        {
            name: "keywords",
            content: [
                "Project",
                "Projects",
                "Web Projects",
                "GitHub",
                "Website",
                "Front-end",
                "Front-end Projects",
                "React",
                "React.js",
                "React.js Projects",
                "Next.js",
                "Next.js Projects"
            ].join(", ")
        }
    ],
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`
}
