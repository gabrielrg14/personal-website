import { USERNAME } from "common"
import { MarkGithub } from "@styled-icons/octicons/MarkGithub"
import { Linkedin } from "@styled-icons/simple-icons/Linkedin"
import { Instagram } from "@styled-icons/simple-icons/Instagram"

export const socialMedias = [
    {
        name: "GitHub",
        link: `https://github.com/${USERNAME}/`,
        icon: <MarkGithub />
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/gabrielrapuccigonzalez/",
        icon: <Linkedin />
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/gabriel_rapucci/",
        icon: <Instagram />
    }
]
