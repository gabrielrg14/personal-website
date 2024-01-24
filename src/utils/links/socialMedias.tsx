import { USERNAME } from "common"
import { Linkedin } from "@styled-icons/simple-icons/Linkedin"
import { MarkGithub } from "@styled-icons/octicons/MarkGithub"

export const socialMedias = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/gabrielrapuccigonzalez/",
        icon: <Linkedin />
    },
    {
        name: "GitHub",
        link: `https://github.com/${USERNAME}`,
        icon: <MarkGithub />
    }
]
