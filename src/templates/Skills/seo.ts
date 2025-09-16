import { IPageSeo } from "interfaces"

export const pageSeo: IPageSeo = {
    title: "Skills",
    description:
        "The technology skills I have, divided into sections: Main technologies I master, Other technologies I've tried, I'm studying right now and I plan to study next.",
    additionalMetaTags: [
        {
            name: "keywords",
            content: [
                "Skill",
                "Skills",
                "Technology",
                "Technologies",
                "Technology Skills",
                "Main technologies I master",
                "Other technologies I've tried",
                "I'm studying right now",
                "I plan to study next"
            ].join(", ")
        }
    ],
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/skills`
}
